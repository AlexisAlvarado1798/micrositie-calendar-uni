import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Professor} from "../../mod-core/models/professor";
import {RoomDomain} from "../../mod-core/models/RoomDomain";
import {ProfessorService} from "../../mod-core/service/professor.service";
import {MessageService} from "primeng/api";
import {ScheduleService} from "../../mod-core/service/schedule.service";
import {RoomService} from "../../mod-core/service/room.service";
import {MateriasService} from "../../mod-core/service/materias.service";
import {DatePipe} from "@angular/common";
import {Router} from "@angular/router";
import {ScheduleDomain} from "../../mod-core/models/ScheduleDomain";

@Component({
  selector: 'app-modal-edit',
  templateUrl: './modal-edit.component.html',
  styleUrls: ['./modal-edit.component.scss']
})
export class ModalEditComponent implements OnInit {
  editScheduleFormGroup: FormGroup;
  professorDomains: any;
  roomsDomains: any;
  materiasDomains: any;
  selectedProfessor?  : Professor;
  selectedRoom: RoomDomain = new RoomDomain();
  selectedMaterias: any;
  scheduleDomain: ScheduleDomain = new ScheduleDomain();
  classe: any;

  constructor(private formBuilder: FormBuilder,
              private professorService: ProfessorService,
              private messageService: MessageService,
              private scheduleService: ScheduleService,
              private roomService: RoomService,
              private materiasService: MateriasService,
              private datePipe: DatePipe,
              private router: Router) {
    this.editScheduleFormGroup = this.formBuilder.group({
      starDate: ['', [Validators.required, ]],
      time: ['', Validators.required],
      professorId: ['', Validators.required],
      roomId: ['', Validators.required],
      materiasId: ['', Validators.required]
    })
  }
  ngOnInit() {
    this.findAllProfessor();
    this.findAllRoom();
    this.findAllMaterias()
    this.classe = history.state.classe;

    if (!this.classe) {
      // Redirige si no hay datos
      this.router.navigate(['/']);
    }

    this.classe.starDate = new Date(this.classe.starDate);
    this.classe.endDate = new Date(this.classe.endDate);
    const start = new Date(this.classe.starDate).getTime();
    const end = new Date(this.classe.endDate).getTime();

// Calcula la duración en horas
    const durationInHours = (end - start) / (1000 * 60 * 60);
    console.log(history.state.classe)

    this.editScheduleFormGroup.patchValue({
      starDate: this.classe.starDate,
      time: durationInHours,
      professorId: this.classe.professorId,
      roomId: this.classe.roomId,
      materiasId: this.classe.materiasId
    })
  }

  findAllProfessor() {
    this.professorService.getFindAll().subscribe(
      data => {
        if (data?.message != null) {
          this.professorDomains = data.message;

          this.professorDomains = this.professorDomains.map((professor: Professor) => ({
            id: professor.id,
            fullName: `${professor.name} ${professor.lastname}`, // Nueva propiedad
          }));
        }
      }, error => {
        if (typeof error.error.message === 'undefined') {
          error.error.message = "Error con el servidor"
        }
        this.messageService.add({severity: 'error', life: 10 * 500, summary: 'error', detail: 'Error al retornar professores: ' + error.error.message})
      });
  }

  findAllRoom() {
    this.roomService.getFindAll().subscribe(
      data => {
        if (data?.message != null) {
          this.roomsDomains = data.message;
        }
      }, error => {
        if (typeof error.error.message === 'undefined') {
          error.error.message = "Error con el servidor"
        }
        this.messageService.add({severity: 'error', life: 10 * 500, summary: 'error', detail: 'Error al retornar professores: ' + error.error.message})
      });
  }

  findAllMaterias() {
    this.materiasService.getFindAll().subscribe(
      data => {
        if (data?.message != null) {
          this.materiasDomains = data.message;
        }
      }, error => {
        if (typeof error.error.message === 'undefined') {
          error.error.message = "Error con el servidor"
        }
        this.messageService.add({severity: 'error', life: 10 * 500, summary: 'error', detail: 'Error al retornar professores: ' + error.error.message})
      });
  }

  save() {
    const startDate =  this.editScheduleFormGroup.get('starDate')?.value
    const duration = this.editScheduleFormGroup.get('time')?.value
    const endDate = new Date(startDate.getTime() + duration * 60 * 60 * 1000);

    this.scheduleDomain.starDate = this.datePipe.transform(startDate, 'yyyy/MM/dd HH:mm:ss.SSS')!;
    this.scheduleDomain.endDate = this.datePipe.transform(endDate, 'yyyy/MM/dd HH:mm:ss.SSS')!;
    console.log("fecha inicio: ", this.scheduleDomain.starDate)
    console.log("fecha fin: ", this.scheduleDomain.endDate)

    console.log(this.scheduleDomain.starDate, this.scheduleDomain.endDate);
    this.scheduleDomain.professorId = this.editScheduleFormGroup.get('professorId')?.value
    this.scheduleDomain.userId = "a3ecaa4adda54d3fa2433c9bfcfe89d0"
    this.scheduleDomain.roomId = this.editScheduleFormGroup.get('roomId')?.value;
    this.scheduleDomain.universitySubjectId = this.editScheduleFormGroup.get('materiasId')?.value
    this.scheduleDomain.id = this.classe.id

    console.log(this.scheduleDomain)
      this.scheduleService.update(this.scheduleDomain).subscribe(
      response => {
        this.messageService.add({severity: 'success', life: 10 * 500, summary: 'Information', detail: 'Clase Guardada'})
        setTimeout(()=> {this.router.navigate(["clases"]); }, 20 * 100 );

      }, error => {
        this.messageService.add({severity: 'error', life: 10 * 500, summary: 'error', detail: 'Error al guardar: ' + error.error.message})
      })
  }

}

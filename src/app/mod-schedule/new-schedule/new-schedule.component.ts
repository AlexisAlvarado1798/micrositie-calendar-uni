import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ValidatorFormConstant} from "../../mod-core/constants/ValidatorFormConstant";
import {ProfessorService} from "../../mod-core/service/professor.service";
import {MessageService} from "primeng/api";
import {Professor} from "../../mod-core/models/professor";
import {ScheduleDomain} from "../../mod-core/models/ScheduleDomain";
import {ScheduleService} from "../../mod-core/service/schedule.service";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-new-schedule',
  templateUrl: './new-schedule.component.html',
  styleUrls: ['./new-schedule.component.scss']
})
export class NewScheduleComponent implements OnInit  {
  newScheduleFormGroup: FormGroup;
  professorDomains: any;
  selectedProfessor?: Professor;
  scheduleDomain: ScheduleDomain = new ScheduleDomain();

  constructor(private formBuilder: FormBuilder,
              private professorService: ProfessorService,
              private messageService: MessageService,
              private scheduleService: ScheduleService,
              private datePipe: DatePipe) {
    this.newScheduleFormGroup = this.formBuilder.group({
      starDate: ['', [Validators.required, ]],
      time: ['', Validators.required],
      professorId: ['', Validators.required],
      userId: ['', Validators.required]
    })
  }

  ngOnInit() {
    this.findAllProfessor();
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

  save() {
    const startDate =  this.newScheduleFormGroup.get('starDate')?.value
    const duration = this.newScheduleFormGroup.get('time')?.value
    const endDate = new Date(startDate.getTime() + duration * 60 * 60 * 1000);

    this.scheduleDomain.starDate = this.datePipe.transform(startDate, 'yyyy/MM/dd HH:mm:ss.SSS')!;
    this.scheduleDomain.endDate = this.datePipe.transform(endDate, 'yyyy/MM/dd HH:mm:ss.SSS')!;
    console.log("fecha inicio: ", this.scheduleDomain.starDate)
    console.log("fecha fin: ", this.scheduleDomain.endDate)

      console.log(this.scheduleDomain.starDate, this.scheduleDomain.endDate);
    this.scheduleDomain.professorId = "3002be5032704bd584e2997f4c8a1aa1"
    this.scheduleDomain.userId = "a3ecaa4adda54d3fa2433c9bfcfe89d0";


    this.scheduleService.save(this.scheduleDomain).subscribe(
      response => {
        this.messageService.add({severity: 'success', life: 10 * 500, summary: 'Information', detail: 'Usuario Guardado'})
      }, error => {
        this.messageService.add({severity: 'error', life: 10 * 500, summary: 'error', detail: 'Error al guardar: ' + error.error.message})
      })
  }

}

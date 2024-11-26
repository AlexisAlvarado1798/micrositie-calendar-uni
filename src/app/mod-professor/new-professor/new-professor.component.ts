import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ValidatorFormConstant} from "../../mod-core/constants/ValidatorFormConstant";
import {Professor} from "../../mod-core/models/professor";
import {ProfessorService} from "../../mod-core/service/professor.service";
import {MessageService} from "primeng/api";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-professor',
  templateUrl: './new-professor.component.html',
  styleUrls: ['./new-professor.component.scss']
})
export class NewProfessorComponent implements OnInit{

  newProfessorFormGroup: FormGroup;
  status: any;
  professorDomain: Professor = new Professor();

  constructor(private formBuilder: FormBuilder,
              private professorService: ProfessorService,
              private messageService: MessageService,
              private router: Router) {
    this.newProfessorFormGroup = this.formBuilder.group({
      code: ['', [Validators.required]],
      name: ['', [Validators.required]],
      lastname: ['', Validators.required],
      email: ['', [Validators.required]],
      status: ['', Validators.required]
    })
  }

  ngOnInit() {
    this.status = [
      { name: 'Activo', code: true },
      { name: 'Inactivo', code: false }
    ]
  }

  save() {
    this.professorDomain.code = this.newProfessorFormGroup.get('code')?.value;
    this.professorDomain.name = this.newProfessorFormGroup.get('name')?.value;
    this.professorDomain.lastname = this.newProfessorFormGroup.get('lastname')?.value;
    this.professorDomain.email = this.newProfessorFormGroup.get('email')?.value;
    this.professorDomain.active = this.newProfessorFormGroup.get('status')?.value;

    this.professorService.save(this.professorDomain).subscribe(
      response => {
        this.messageService.add({severity: 'success', life: 10 * 500, summary: 'Information', detail: 'Usuario Guardado'})
        setTimeout(()=> {this.router.navigate(["professor"]); }, 20 * 100 );
      }, error => {
        this.messageService.add({severity: 'error', life: 10 * 500, summary: 'error', detail: 'Error al guardar: ' + error.error.message})
      })


  }

}

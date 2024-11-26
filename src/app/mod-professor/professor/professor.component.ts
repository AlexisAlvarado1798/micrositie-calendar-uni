import {Component, OnInit} from '@angular/core';
import {ProfessorService} from "../../mod-core/service/professor.service";
import {Professor} from "../../mod-core/models/professor";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-professor',
  templateUrl: './professor.component.html',
  styleUrls: ['./professor.component.scss']
})
export class ProfessorComponent implements OnInit {
  professorDomain: any;

  constructor(private professorService: ProfessorService,
              private messageService: MessageService) {
  }

  ngOnInit() {
    this.professorService.getFindAll().subscribe(
      data => {
        if (data?.message != null) {
          this.professorDomain = data.message;
        }
      }, error => {
        if (typeof error.error.message === 'undefined') {
          error.error.message = "Error con el servidor"
        }
        this.messageService.add({severity: 'error', life: 10 * 500, summary: 'error', detail: 'Error al retornar usuarios: ' + error.error.message})
      }
    )
  }

}

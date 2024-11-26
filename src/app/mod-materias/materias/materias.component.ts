import {Component, OnInit} from '@angular/core';
import {MateriasService} from "../../mod-core/service/materias.service";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-materias',
  templateUrl: './materias.component.html',
  styleUrls: ['./materias.component.scss']
})
export class MateriasComponent implements OnInit{
  materiasDomains: any;
  constructor(private materiasService: MateriasService,
              private messageService: MessageService) {
  }

  ngOnInit() {
    this.materiasService.getFindAll().subscribe(
      data => {
        if (data?.message != null) {
          this.materiasDomains = data.message;
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

import {Component, OnInit} from '@angular/core';
import {ScheduleService} from "../../mod-core/service/schedule.service";
import {MessageService} from "primeng/api";
import {Router} from "@angular/router";

@Component({
  selector: 'app-management-schedule',
  templateUrl: './management-schedule.component.html',
  styleUrls: ['./management-schedule.component.scss']
})
export class ManagementScheduleComponent implements OnInit {
  scheduleDomains: any;
  constructor(private scheduleService: ScheduleService,
              private messageService: MessageService,
              private router: Router) {
  }

  ngOnInit() {
    this.scheduleService.getFindAll().subscribe(
      data => {
        if (data?.message != null) {
          this.scheduleDomains = data.message;
        }
      }, error => {
        if (typeof error.error.message === 'undefined') {
          error.error.message = "Error con el servidor"
        }
        this.messageService.add({severity: 'error', life: 10 * 500, summary: 'error', detail: 'Error al retornar las clases: ' + error.error.message})
      }
    )
  }

  navigateToEditUser(classe: any) {
    console.log('Datos actualizados:', classe);
    this.router.navigate(['/edit-class'], { state: { classe } });
  }

  delete(schedule: any) {
    this.scheduleService.delete(schedule.id).subscribe(
      response => {
        this.messageService.add({severity: 'success', life: 10 * 500, summary: 'Information', detail: 'Clase Elimanada'})
        this.ngOnInit();
      },error =>{
        this.messageService.add({severity: 'error', life: 10 * 500, summary: 'error', detail: 'Error al eliminar el Clase: ' + error.error.message})

      })
  }

}

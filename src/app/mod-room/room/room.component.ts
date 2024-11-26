import {Component, OnInit} from '@angular/core';
import {RoomService} from "../../mod-core/service/room.service";
import {RoomDomain} from "../../mod-core/models/RoomDomain";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit{

  roomDomains: any;

  constructor(private roomService: RoomService,
              private messageService: MessageService) {
  }
  ngOnInit() {
    this.roomService.getFindAll().subscribe(
      data => {
        if (data?.message != null) {
          this.roomDomains = data.message;
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

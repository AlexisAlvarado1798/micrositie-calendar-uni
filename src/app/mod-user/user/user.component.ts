import {Component, OnInit} from '@angular/core';
import {UserService} from "../../mod-core/service/user.service";
import {MessageService} from "primeng/api";
import {UserDomain} from "../../mod-core/models/UserDomain";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  providers: [MessageService]
})
export class UserComponent implements OnInit {
  userDomains: any;
  constructor(private userService: UserService,
              private messageService: MessageService,
              private router: Router) {

  }

  ngOnInit() {
    this.userService.getFindAll().subscribe(
      data => {
        if (data?.message != null) {
          this.userDomains = data.message;
        }
      }, error => {
        if (typeof error.error.message === 'undefined') {
          error.error.message = "Error con el servidor"
        }
        this.messageService.add({severity: 'error', life: 10 * 500, summary: 'error', detail: 'Error al retornar usuarios: ' + error.error.message})
      }
    )
  }

  navigateToEditUser(user: any) {
    console.log('Datos actualizados:', user);
    this.router.navigate(['/edit-user'], { state: { user } });
  }

  delete(user: any) {
    this.userService.delete(user.username).subscribe(
      response => {
        this.messageService.add({severity: 'success', life: 10 * 500, summary: 'Information', detail: 'Usuario Elimanado'})
        this.ngOnInit();
      },error =>{
        this.messageService.add({severity: 'error', life: 10 * 500, summary: 'error', detail: 'Error al eliminar el usuario: ' + error.error.message})

      })
  }


}

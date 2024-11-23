import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserDomain} from "../../mod-core/models/UserDomain";
import {UserService} from "../../mod-authentication/login/service/user.service";
import {MessageService} from "primeng/api";
import {Router} from "@angular/router";
import {ValidatorFormConstant} from "../../mod-core/constants/ValidatorFormConstant";

@Component({
  selector: 'app-modal-edit',
  templateUrl: './modal-edit.component.html',
  styleUrls: ['./modal-edit.component.scss']
})
export class ModalEditComponent implements OnInit{
  editUserFormGroup: FormGroup;
  user: any;
  status: any;
  userDomain: UserDomain = new UserDomain();

  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private messageService: MessageService,
              private router: Router) {
    this.editUserFormGroup = this.formBuilder.group({
      username: ['', [Validators.required, Validators.pattern(ValidatorFormConstant.EMAIL)]],
      password: ['', Validators.required],
      status: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.status = [
      { name: 'Activo', code: true },
      { name: 'Inactivo', code: false }
    ]
    this.user = history.state.user;
    if (!this.user) {
      // Redirige si no hay datos
      this.router.navigate(['/']);
    }
    this.editUserFormGroup.patchValue({
      username: this.user.username,
      password: this.user.password,
      status: this.user.active
    })
  }

  save() {
    this.userDomain.id = this.user.id;
    this.userDomain.username = this.editUserFormGroup.get('username')?.value;
    this.userDomain.password = this.editUserFormGroup.get('password')?.value;
    this.userDomain.active = this.editUserFormGroup.get('status')?.value;
    this.userDomain.creationDate = this.user.creationDate;


    this.userService.update(this.userDomain).subscribe(
      response => {
        this.messageService.add({severity: 'success', life: 10 * 500, summary: 'Information', detail: 'Usuario Guardado'})
        setTimeout(()=> {this.router.navigate(["user"]); }, 20 * 100 );
      }, error => {
        this.messageService.add({severity: 'error', life: 10 * 500, summary: 'error', detail: 'Error al guardar: ' + error.error.message})
      })
  }
}

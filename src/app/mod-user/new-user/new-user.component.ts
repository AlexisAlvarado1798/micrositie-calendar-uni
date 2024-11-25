import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ValidatorFormConstant} from "../../mod-core/constants/ValidatorFormConstant";
import {UserDomain} from "../../mod-core/models/UserDomain";
import {UserService} from "../../mod-core/service/user.service";
import {MessageService} from "primeng/api";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit{
  newUserFormGroup: FormGroup;
  status: any;
  userDomain: UserDomain = new UserDomain();

  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private messageService: MessageService,
              private router: Router) {
    this.newUserFormGroup = this.formBuilder.group({
      username: ['', [Validators.required, Validators.pattern(ValidatorFormConstant.EMAIL)]],
      password: ['', Validators.required],
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
    this.userDomain.username = this.newUserFormGroup.get('username')?.value;
    this.userDomain.password = this.newUserFormGroup.get('password')?.value;
    this.userDomain.active = this.newUserFormGroup.get('status')?.value;

    this.userService.save(this.userDomain).subscribe(
      response => {
        this.messageService.add({severity: 'success', life: 10 * 500, summary: 'Information', detail: 'Usuario Guardado'})
        setTimeout(()=> {this.router.navigate(["user"]); }, 20 * 100 );
    }, error => {
        this.messageService.add({severity: 'error', life: 10 * 500, summary: 'error', detail: 'Error al guardar: ' + error.error.message})
      })
  }

}

import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ValidatorFormConstant} from "../../mod-core/constants/ValidatorFormConstant";
import {UserService} from "./service/user.service";
import {RequestLogin} from "../../mod-core/models/RequestLogin";
import {MessageService} from "primeng/api";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [MessageService]
})
export class LoginComponent {
  loginFormGroup: FormGroup;
  requestLogin: RequestLogin = new RequestLogin();

  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private messageService: MessageService,
              private router: Router) {
    this.loginFormGroup = this.formBuilder.group({
      username: ['', [Validators.required, Validators.pattern(ValidatorFormConstant.EMAIL)]],
      password: ['', Validators.required]
    })  }

  login() {
    this.requestLogin.username = this.loginFormGroup.get('username')?.value
    this.requestLogin.password = this.loginFormGroup.get('password')?.value

    this.userService.getAuthentication(this.requestLogin).subscribe(
      response => {
        console.log("logueado")
        this.messageService.add({severity: 'success', life: 10 * 500, summary: 'Information', detail: 'Autenticado'})
      }, error => {
        console.log("no fue posible el loguarse: ", error.error.message)
        this.router.navigate(["home"])
        this.messageService.add({severity: 'error', life: 10 * 500, summary: 'error', detail: 'Error al autenticarse: ' + error.error.message})
      }
    )

  }

  get form() {
    return this.loginFormGroup.controls;
  }


}

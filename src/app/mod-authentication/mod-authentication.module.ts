import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModAuthenticationRoutingModule } from './mod-authentication-routing.module';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    ModAuthenticationRoutingModule
  ]
})
export class ModAuthenticationModule { }

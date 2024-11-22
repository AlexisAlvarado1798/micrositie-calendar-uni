import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModAuthenticationRoutingModule } from './mod-authentication-routing.module';
import { LoginComponent } from './login/login.component';
import {ModCoreModule} from "../mod-core/mod-core.module";


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    ModAuthenticationRoutingModule,
    ModCoreModule
  ]
})
export class ModAuthenticationModule { }

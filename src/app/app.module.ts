import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ModAuthenticationModule} from "./mod-authentication/mod-authentication.module";
import {ModCoreModule} from "./mod-core/mod-core.module";
import {MessageService} from "primeng/api";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ModHomeModule} from "./mod-home/mod-home.module";
import {ModUserModule} from "./mod-user/mod-user.module";
import {ModScheduleModule} from "./mod-schedule/mod-schedule.module";
import {DatePipe} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ModAuthenticationModule,
    ModCoreModule,
    ModHomeModule,
    ModUserModule,
    ModScheduleModule
  ],
  providers: [MessageService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ButtonModule} from "primeng/button";
import {ModAuthenticationModule} from "./mod-authentication/mod-authentication.module";
import {ModCoreModule} from "./mod-core/mod-core.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModAuthenticationModule,
    ModCoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

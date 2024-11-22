import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModHomeRoutingModule } from './mod-home-routing.module';
import { HomeComponent } from './home/home.component';
import {ModCoreModule} from "../mod-core/mod-core.module";


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    ModHomeRoutingModule,
    ModCoreModule
  ]
})
export class ModHomeModule { }

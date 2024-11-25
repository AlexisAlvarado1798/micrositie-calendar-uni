import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModScheduleRoutingModule } from './mod-schedule-routing.module';
import { ManagementScheduleComponent } from './management-schedule/management-schedule.component';
import {ModCoreModule} from "../mod-core/mod-core.module";
import { NewScheduleComponent } from './new-schedule/new-schedule.component';


@NgModule({
  declarations: [
    ManagementScheduleComponent,
    NewScheduleComponent
  ],
  imports: [
    CommonModule,
    ModScheduleRoutingModule,
    ModCoreModule
  ]
})
export class ModScheduleModule { }

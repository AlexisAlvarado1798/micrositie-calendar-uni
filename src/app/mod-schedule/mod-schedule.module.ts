import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModScheduleRoutingModule } from './mod-schedule-routing.module';
import { ManagementScheduleComponent } from './management-schedule/management-schedule.component';
import {ModCoreModule} from "../mod-core/mod-core.module";
import { NewScheduleComponent } from './new-schedule/new-schedule.component';
import {FullCalendarModule} from "@fullcalendar/angular";
import { ModalEditComponent } from './modal-edit/modal-edit.component';


@NgModule({
  declarations: [
    ManagementScheduleComponent,
    NewScheduleComponent,
    ModalEditComponent
  ],
    imports: [
        CommonModule,
        ModScheduleRoutingModule,
        ModCoreModule
    ]
})
export class ModScheduleModule { }

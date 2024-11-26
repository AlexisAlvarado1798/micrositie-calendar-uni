import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserComponent} from "../mod-user/user/user.component";
import {ManagementScheduleComponent} from "./management-schedule/management-schedule.component";
import {NewScheduleComponent} from "./new-schedule/new-schedule.component";
import {ModalEditComponent} from "./modal-edit/modal-edit.component";

const routes: Routes = [
  {
    path: 'clases', component: ManagementScheduleComponent
  },
  {
    path: 'nuevo-clase', component: NewScheduleComponent
  },
  {
    path: 'edit-class', component: ModalEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModScheduleRoutingModule { }

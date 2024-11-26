import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProfessorComponent} from "./professor/professor.component";
import {NewProfessorComponent} from "./new-professor/new-professor.component";

const routes: Routes = [{
  path: 'professor', component: ProfessorComponent
},
  {
    path: 'new-professor', component: NewProfessorComponent
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModProfessorRoutingModule { }

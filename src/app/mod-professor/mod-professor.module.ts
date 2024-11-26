import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModProfessorRoutingModule } from './mod-professor-routing.module';
import {ModCoreModule} from "../mod-core/mod-core.module";
import { ProfessorComponent } from './professor/professor.component';
import { NewProfessorComponent } from './new-professor/new-professor.component';


@NgModule({
  declarations: [
    ProfessorComponent,
    NewProfessorComponent
  ],
  imports: [
    CommonModule,
    ModProfessorRoutingModule,
    ModCoreModule
  ]
})
export class ModProfessorModule { }

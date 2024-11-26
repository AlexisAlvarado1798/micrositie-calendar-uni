import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MateriasComponent} from "./materias/materias.component";

const routes: Routes = [{
  path: 'materias', component: MateriasComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModMateriasRoutingModule { }

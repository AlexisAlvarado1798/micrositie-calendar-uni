import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ModMateriasRoutingModule} from './mod-materias-routing.module';
import {MateriasComponent} from './materias/materias.component';
import {ModCoreModule} from "../mod-core/mod-core.module";


@NgModule({
  declarations: [
    MateriasComponent
  ],
  imports: [
    CommonModule,
    ModMateriasRoutingModule,
    ModCoreModule
  ]
})
export class ModMateriasModule {
}

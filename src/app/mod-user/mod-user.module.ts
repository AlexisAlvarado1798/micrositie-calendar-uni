import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModUserRoutingModule } from './mod-user-routing.module';
import { UserComponent } from './user/user.component';
import {ModCoreModule} from "../mod-core/mod-core.module";
import { NewUserComponent } from './new-user/new-user.component';
import { ModalEditComponent } from './modal-edit/modal-edit.component';


@NgModule({
  declarations: [
    UserComponent,
    NewUserComponent,
    ModalEditComponent
  ],
  imports: [
    CommonModule,
    ModUserRoutingModule,
    ModCoreModule
  ]
})
export class ModUserModule { }

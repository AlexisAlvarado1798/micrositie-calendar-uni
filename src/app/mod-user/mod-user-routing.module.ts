import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserComponent} from "./user/user.component";
import {NewUserComponent} from "./new-user/new-user.component";
import {ModalEditComponent} from "./modal-edit/modal-edit.component";

const routes: Routes = [
  {
    path: 'user', component: UserComponent
  },
  {
    path: 'new-user', component: NewUserComponent
  },
  {
    path: 'edit-user', component: ModalEditComponent
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModUserRoutingModule {
}

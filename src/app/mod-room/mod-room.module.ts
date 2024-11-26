import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ModRoomRoutingModule} from './mod-room-routing.module';
import {RoomComponent} from './room/room.component';
import {ModCoreModule} from "../mod-core/mod-core.module";


@NgModule({
  declarations: [
    RoomComponent
  ],
  imports: [
    CommonModule,
    ModRoomRoutingModule,
    ModCoreModule
  ]
})
export class ModRoomModule {
}

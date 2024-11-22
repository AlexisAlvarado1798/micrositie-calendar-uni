import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CardModule} from "primeng/card";
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {ToastModule} from "primeng/toast";
import {MessageModule} from "primeng/message";
import {MessagesModule} from "primeng/messages";
import {TableModule} from "primeng/table";
import {DropdownModule} from "primeng/dropdown";
import {ConfirmDialogModule} from "primeng/confirmdialog";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    InputTextModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ToastModule,
    MessageModule,
    MessagesModule,
    TableModule,
    DropdownModule,
    ConfirmDialogModule
  ], exports: [
    CardModule,
    ButtonModule,
    InputTextModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ToastModule,
    MessageModule,
    MessagesModule,
    TableModule,
    DropdownModule,
    ConfirmDialogModule

  ]
})
export class ModCoreModule { }

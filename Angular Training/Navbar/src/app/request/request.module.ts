import { AddRequestComponent } from './add-request/add-request.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RequestRoutingModule } from './request-routing.module';
import { RequestsComponent } from './requests/requests.component';
import { UpdateRequestComponent } from './update-request/update-request.component';
import { ViewRequestComponent } from './view-request/view-request.component';

@NgModule({
  declarations: [
    AddRequestComponent,
    ViewRequestComponent,
    UpdateRequestComponent,
    RequestsComponent
  ],
  imports: [
    CommonModule,
    RequestRoutingModule,
    FormsModule
  ]
})
export class RequestModule { }

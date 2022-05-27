import { RouterModule, Routes } from '@angular/router';

import { AddRequestComponent } from './add-request/add-request.component';
import { NgModule } from '@angular/core';
import { RequestsComponent } from './requests/requests.component';
import { UpdateRequestComponent } from './update-request/update-request.component';
import { ViewRequestComponent } from './view-request/view-request.component';

const routes: Routes = [
  { path: '', redirectTo: 'req', pathMatch: 'full' },
  {
    path: 'req',
    component: RequestsComponent,
    children: [
      { path: 'addReq', component: AddRequestComponent },
      { path: 'editReq', component: UpdateRequestComponent },
      { path: 'viewReq', component: ViewRequestComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RequestRoutingModule {}

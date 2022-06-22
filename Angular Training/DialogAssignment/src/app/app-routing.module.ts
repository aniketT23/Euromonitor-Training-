import { RouterModule, Routes } from '@angular/router';

import { AddDataComponent } from './featureModule/add-data/add-data.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { ShowDataComponent } from './featureModule/show-data/show-data.component';

const routes: Routes = [
  {path:'',component:ShowDataComponent,pathMatch:'full'},
  {path:'add',component:AddDataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

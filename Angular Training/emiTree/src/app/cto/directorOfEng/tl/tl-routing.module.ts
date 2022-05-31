import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { Se1Component } from './se1/se1.component';
import { Se2Component } from './se2/se2.component';
import { Se3Component } from './se3/se3.component';
import { SeniorSEComponent } from './senior-se/senior-se.component';

const routes: Routes = [
  {path:"",component:SeniorSEComponent},
  { path: 'senior', component: SeniorSEComponent },
  { path: 'se3', component: Se3Component },
  { path: 'se2', component: Se2Component },
  { path: 'se1', component: Se1Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TlRoutingModule {}

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CeoComponent } from './ceo/ceo.component';
import { CheifProdComponent } from './cheif-prod/cheif-prod.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { VpComponent } from './vp/vp.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'ceo', component: CeoComponent,children:[{
    path:"vp",component:VpComponent
  },{path:"cheif",component:CheifProdComponent},{path:"cto",loadChildren:()=>import('./cto/cto.module').then(m=>m.CtoModule)}] },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

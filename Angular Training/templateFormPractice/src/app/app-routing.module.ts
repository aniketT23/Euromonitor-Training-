import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ErrorComponentComponent } from './error-component/error-component.component';
import { NgModule } from '@angular/core';
import { RecativeFormComponent } from './recative-form/recative-form.component';
import { TemplateFormComponent } from './template-form/template-form.component';

const routes: Routes = [
  {path:'',component:AppComponent,pathMatch:'full'},
  {path:'template',component:TemplateFormComponent},
  {path:'reactive',component:RecativeFormComponent},
  {path:'**',component:ErrorComponentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

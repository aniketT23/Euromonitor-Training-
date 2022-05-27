import { RouterModule, Routes } from '@angular/router';

import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailsEmployeeComponent } from './details-employee/details-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { EmployeeComponent } from './employee/employee.component';
import { ErrorPageComponent } from './../../../SampleAssignment/src/app/featureModule/error-page/error-page.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'home', redirectTo: '/login', pathMatch: 'prefix' },
  { path: 'dashboard', component: DashboardComponent },
  {
    path: 'Employee',
    component: EmployeeComponent,
    children: [
      { path: 'add', component: AddEmployeeComponent },
      { path: 'edit', component: EditEmployeeComponent },
      { path: 'details', component: DetailsEmployeeComponent },
    ],
  },
  {path:"request",loadChildren:()=>import('./request/request.module').then(m=>m.RequestModule)},
  { path: '**', component: ErrorPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

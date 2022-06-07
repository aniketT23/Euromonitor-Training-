import { RouterModule, Routes } from '@angular/router';

import { AboutUsComponent } from './Components/about-us/about-us.component';
import { DetailEmpComponent } from './Components/detail-emp/detail-emp.component';
import { EmployeesComponent } from './Components/employees/employees.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { NgModule } from '@angular/core';
import { RoutingComponent } from './Components/routing/routing.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'menu', component: HomeComponent },
  { path: 'emp', component: EmployeesComponent },
  { path: 'login', component: LoginComponent },
  {path:'route',component:RoutingComponent},
  {path:'empRoute/:id',component:DetailEmpComponent},
  { path: '**', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

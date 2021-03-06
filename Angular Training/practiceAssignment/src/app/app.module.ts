import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AboutUsComponent } from './Components/about-us/about-us.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AssignInitialPipe } from './SharedMpdule/assign-initial.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { DetailEmpComponent } from './Components/detail-emp/detail-emp.component';
import { EmpWorkComponent } from './Components/emp-work/emp-work.component';
import { EmployeesComponent } from './Components/employees/employees.component';
import { HomeComponent } from './Components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './Components/login/login.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgModule } from '@angular/core';
import { ProficiencyPipe } from './SharedMqdule/proficiency.pipe';
import { RoutingComponent } from './Components/routing/routing.component';
import { ShowEmpComponent } from './Components/show-emp/show-emp.component';
import { ShowEmpDataComponent } from './Components/show-emp-data/show-emp-data.component';
import { StoreComponent } from './Components/store/store.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    RoutingComponent,
    LoginComponent,
    EmployeesComponent,
    DetailEmpComponent,
    AssignInitialPipe,
    StoreComponent,
    EmpWorkComponent,
    ShowEmpDataComponent,
    ShowEmpComponent,
    ProficiencyPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,
    Ng2SearchPipeModule,HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

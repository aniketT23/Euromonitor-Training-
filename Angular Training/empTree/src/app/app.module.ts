import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './featuredModule/home/home.component';
import { DepartmentComponent } from './featuredModule/department/department.component';
import { AboutUsComponent } from './featuredModule/about-us/about-us.component';
import { LoginComponent } from './featuredModule/login/login.component';
import { TechnologyComponent } from './featuredModule/Department/technology/technology.component';
import { SalesComponent } from './featuredModule/Department/sales/sales.component';
import { ResearchComponent } from './featuredModule/Department/research/research.component';
import { DirectorOfEngComponent } from './featuredModule/Department/technology/director-of-eng/director-of-eng.component';
import { CeoComponent } from './featuredModule/Department/technology/ceo/ceo.component';
import { CtoComponent } from './featuredModule/Department/technology/cto/cto.component';
import { HeadOfSoftwareComponent } from './featuredModule/Department/technology/directorOfEng/head-of-software/head-of-software.component';
import { EngManagerComponent } from './featuredModule/Department/technology/directorOfEng/eng-manager/eng-manager.component';
import { ChiefArchitectComponent } from './featuredModule/Department/technology/cto/chief-architect/chief-architect.component';
import { FinanceManagerComponent } from './featuredModule/Department/technology/directorOfEng/finance-manager/finance-manager.component';
import { HrComponent } from './featuredModule/Department/technology/directorOfEng/hr/hr.component';
import { TechnicalTrainerComponent } from './featuredModule/Department/technology/directorOfEng/technical-trainer/technical-trainer.component';
import { TechLeaderComponent } from './featuredModule/Department/technology/directorOfEng/headOfSoftware/tech-leader/tech-leader.component';
import { SoftwareTesterComponent } from './featuredModule/Department/technology/directorOfEng/headOfSoftware/software-tester/software-tester.component';
import { SeniorSoftwareEngComponent } from './featuredModule/Department/technology/directorOfEng/headOfSoftware/senior-software-eng/senior-software-eng.component';
import { Se3Component } from './featuredModule/Department/technology/directorOfEng/headOfSoftware/se3/se3.component';
import { Se2Component } from './featuredModule/Department/technology/directorOfEng/headOfSoftware/se2/se2.component';
import { Se1Component } from './featuredModule/Department/technology/directorOfEng/headOfSoftware/se1/se1.component';
import { VpComponent } from './featuredModule/Department/technology/vp/vp.component';
import { ChiefProductOfficerComponent } from './featuredModule/Department/technology/chief-product-officer/chief-product-officer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DepartmentComponent,
    AboutUsComponent,
    LoginComponent,
    TechnologyComponent,
    SalesComponent,
    ResearchComponent,
    DirectorOfEngComponent,
    CeoComponent,
    CtoComponent,
    HeadOfSoftwareComponent,
    EngManagerComponent,
    ChiefArchitectComponent,
    FinanceManagerComponent,
    HrComponent,
    TechnicalTrainerComponent,
    TechLeaderComponent,
    SoftwareTesterComponent,
    SeniorSoftwareEngComponent,
    Se3Component,
    Se2Component,
    Se1Component,
    VpComponent,
    ChiefProductOfficerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AgGridModule } from 'ag-grid-angular';
import { AngualrModuleModule } from './featuredModule/angualr-module/angualr-module.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CreateReqComponent } from './components/create-req/create-req.component';
import { CreateReqFormComponent } from './components/create-req-form/create-req-form.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DeleteReqComponent } from './components/delete-req/delete-req.component';
import { EditReqComponent } from './components/edit-req/edit-req.component';
import { HistoryComponent } from './components/history/history.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { NgModule } from '@angular/core';
import { PersonalInfoComponent } from './components/personal-info/personal-info.component';
import { RecentReqComponent } from './components/recent-req/recent-req.component';
import { SignupComponent } from './components/signup/signup.component';
import { StatsComponent } from './components/stats/stats.component';
import { ToastrModule } from 'ngx-toastr';
import { UserReqsComponent } from './components/user-reqs/user-reqs.component';
import { UserReqsDataComponent } from './components/user-reqs-data/user-reqs-data.component';
import { ViewReqComponent } from './components/view-req/view-req.component';
import { ViewReqFormComponent } from './components/view-req-form/view-req-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    NavigationBarComponent,
    HomePageComponent,
    DashboardComponent,
    PersonalInfoComponent,
    StatsComponent,
    RecentReqComponent,
    CreateReqComponent,
    CreateReqFormComponent,
    ViewReqComponent,
    ViewReqFormComponent,
    EditReqComponent,
    DeleteReqComponent,
    HistoryComponent,
    UserReqsComponent,
    UserReqsDataComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngualrModuleModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AgGridModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

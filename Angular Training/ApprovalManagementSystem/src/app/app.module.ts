import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AngualrModuleModule } from './components/materialModule/angualr-module/angualr-module.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { SignupComponent } from './components/signup/signup.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PersonalInfoComponent } from './components/personal-info/personal-info.component';
import { StatsComponent } from './components/stats/stats.component';
import { RecentReqComponent } from './components/recent-req/recent-req.component';
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
    RecentReqComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngualrModuleModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

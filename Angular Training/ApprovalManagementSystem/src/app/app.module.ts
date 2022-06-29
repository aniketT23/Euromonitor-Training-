import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AngualrModuleModule } from './featuredModule/angualr-module/angualr-module.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { NgModule } from '@angular/core';
import { PersonalInfoComponent } from './components/personal-info/personal-info.component';
import { RecentReqComponent } from './components/recent-req/recent-req.component';
import { SignupComponent } from './components/signup/signup.component';
import { StatsComponent } from './components/stats/stats.component';

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

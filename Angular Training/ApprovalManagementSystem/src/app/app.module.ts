import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AngualrModuleModule } from './featuredModule/materialModule/angualr-module/angualr-module.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './featuredModule/login/login.component';
import { NgModule } from '@angular/core';
import { SignupComponent } from './featuredModule/signup/signup.component';
import { NavigationBarComponent } from './featuredModule/navigation-bar/navigation-bar.component';
import { HomePageComponent } from './featuredModule/home-page/home-page.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    NavigationBarComponent,
    HomePageComponent
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

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AddDataComponent } from './featureModule/add-data/add-data.component';
import { AngularMaterialModule } from './featureModule/AngularMaterial/angular-material/angular-material.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core';
import { PaginateComponent } from './featureModule/paginate/paginate.component';
import { ShowDataComponent } from './featureModule/show-data/show-data.component';

@NgModule({
  declarations: [
    AppComponent,
    AddDataComponent,
    ShowDataComponent,
    PaginateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

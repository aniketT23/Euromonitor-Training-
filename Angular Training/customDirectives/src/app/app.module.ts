import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SampleDirDirective } from './sample-dir.directive';
import { SecondDirDirective } from './second-dir.directive';

@NgModule({
  declarations: [
    AppComponent,
    SampleDirDirective,
    SecondDirDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorComponentComponent } from './error-component/error-component.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RecativeFormComponent } from './recative-form/recative-form.component';
import { TemplateFormComponent } from './template-form/template-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateFormComponent,
    RecativeFormComponent,
    ErrorComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

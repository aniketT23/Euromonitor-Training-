import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CartPageComponent } from './featureModule/cart-page/cart-page.component';
import { CategeoryComponent } from './featureModule/categeory/categeory.component';
import { FormsModule } from '@angular/forms';
import { LandingPageModule } from './featureModule/landing-page/landing-page.module';
import { LoginPageComponent } from './featureModule/login-page/login-page.component';
import { NgModule } from '@angular/core';
import { PaymentPageComponent } from './featureModule/payment-page/payment-page.component';
import { ErrorPageComponent } from './featureModule/error-page/error-page.component';
@NgModule({
  declarations: [
    AppComponent,
    CartPageComponent,
    LoginPageComponent,
    PaymentPageComponent,
    CategeoryComponent,
    ErrorPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LandingPageModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

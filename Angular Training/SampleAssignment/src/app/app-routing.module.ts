import { RouterModule, Routes } from '@angular/router';

import { CartPageComponent } from './featureModule/cart-page/cart-page.component';
import { CategeoryComponent } from './featureModule/categeory/categeory.component';
import { ErrorPageComponent } from './featureModule/error-page/error-page.component';
import { LoginPageComponent } from './featureModule/login-page/login-page.component';
import { NgModule } from '@angular/core';
import { PaymentPageComponent } from './featureModule/payment-page/payment-page.component';

const routes: Routes = [
  { path: '', component: LoginPageComponent ,pathMatch:"full"},
  { path: 'login', component: LoginPageComponent },
  { path: 'payment', component: PaymentPageComponent },
  { path: 'cart', component: CartPageComponent },
  { path: 'home', component: CategeoryComponent },
  { path: 'home', redirectTo:"/login",pathMatch:"prefix"},
  { path: '**', component:ErrorPageComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

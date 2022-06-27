import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './featuredModule/home-page/home-page.component';
import { LoginComponent } from './featuredModule/login/login.component';
import { NgModule } from '@angular/core';
import { SignupComponent } from './featuredModule/signup/signup.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'home', component: HomePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

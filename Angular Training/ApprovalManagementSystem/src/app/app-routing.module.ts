import { RouterModule, Routes } from '@angular/router';

import { CreateReqComponent } from './components/create-req/create-req.component';
import { HistoryComponent } from './components/history/history.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { SignupComponent } from './components/signup/signup.component';
import { UserReqsComponent } from './components/user-reqs/user-reqs.component';
import { ViewReqComponent } from './components/view-req/view-req.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'home', component: HomePageComponent },
  {path:'create',component:CreateReqComponent},
  {path:'view',component:ViewReqComponent},
  {path:'history',component:HistoryComponent},
  {path:'userReq',component:UserReqsComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

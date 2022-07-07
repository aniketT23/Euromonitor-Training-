import { RouterModule, Routes } from '@angular/router';

import { AddbooksComponent } from './components/addbooks/addbooks.component';
import { BookListsComponent } from './components/book-lists/book-lists.component';
import { EditBooksComponent } from './components/edit-books/edit-books.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MenuComponent } from './components/menu/menu.component';
import { NgModule } from '@angular/core';
import { SignUpComponent } from './components/sign-up/sign-up.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'add', component: AddbooksComponent },
  { path: 'view', component: BookListsComponent },
  { path: 'edit', component: EditBooksComponent },
  {path:'menu',component:MenuComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

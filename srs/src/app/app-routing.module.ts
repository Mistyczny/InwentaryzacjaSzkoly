import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserListComponent } from './user-list/user-list.component';
import {BookListComponent} from './book-list/book-list.component';
import { BookListAddComponent } from './book-list/book-list-add/book-list-add.component';
import { BookListEditComponent } from './book-list/book-list-edit/book-list-edit.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard'
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: '',
        component: MainPageComponent
      },
      {
        path: 'users',
        component: UserListComponent
      },
      {
        path: 'books',
        component: BookListComponent
      },
      {
        path: 'addBook',
        component: BookListAddComponent
      },
      {
        path: 'editBook/:id',
        component: BookListEditComponent
      },
      {
        path: '**',
        component: PageNotFoundComponent
      }
    ]
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

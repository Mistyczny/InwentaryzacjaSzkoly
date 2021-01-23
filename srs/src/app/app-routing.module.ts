import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserListComponent } from './user-list/user-list.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookListAddComponent } from './book-list/book-list-add/book-list-add.component';
import { BookListEditComponent } from './book-list/book-list-edit/book-list-edit.component';
import { InventoryListComponent } from './inventory-list/inventory-list.component';
import { InventoryListAddComponent } from './inventory-list/inventory-list-add/inventory-list-add.component';
import { InventoryListEditComponent } from './inventory-list/inventory-list-edit/inventory-list-edit.component';
import { BookBorrowListComponent } from './book-borrow-list/book-borrow-list.component';
import { BookBorrowListAddComponent } from './book-borrow-list/book-borrow-list-add/book-borrow-list-add.component';
import { BookBorrowListEditComponent } from './book-borrow-list/book-borrow-list-edit/book-borrow-list-edit.component';
import { UserEditComponent } from './user-list/user-edit/user-edit.component';
import { ChangePasswordComponent } from './user-list/change-password/change-password.component';
import { NewUserComponent } from './user-list/new-user/new-user.component';

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
        path: 'users/:id',
        component: UserEditComponent
      },
      {
        path: 'users/changePassword/:id',
        component: ChangePasswordComponent
      },
      {
        path: 'user/new',
        component: NewUserComponent
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
        path: 'inventory',
        component: InventoryListComponent
      },
      {
        path: 'addInventory',
        component: InventoryListAddComponent
      },
      {
        path: 'editInventoryItem/:id',
        component: InventoryListEditComponent
      },
      {
        path: 'bookBorrows',
        component: BookBorrowListComponent
      },
      {
        path: 'addBookBorrow',
        component: BookBorrowListAddComponent
      },
      {
        path: 'editBookBorrow/:id',
        component: BookBorrowListEditComponent
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

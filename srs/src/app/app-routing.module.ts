import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ChangePasswordComponent } from './user-list/change-password/change-password.component';
import { NewUserComponent } from './user-list/new-user/new-user.component';
import { UserEditComponent } from './user-list/user-edit/user-edit.component';
import { UserListComponent } from './user-list/user-list.component';

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

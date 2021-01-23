import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AngularResizedEventModule } from 'angular-resize-event';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TopMenuComponent } from './shared/top-menu/top-menu.component';
import { SideMenuComponent } from './shared/side-menu/side-menu.component';
import { TopMenuService } from './shared/top-menu/top-menu.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserListComponent } from './user-list/user-list.component';
import { AuthService } from './login-page/auth.service';
import { UsersListService } from './user-list/user-list.service';
import { AuthInterceptor } from './login-page/auth.interceptor';
import { MainPageComponent } from './main-page/main-page.component';
import { ChartsModule } from 'ng2-charts';
import { ChartService } from './shared/chart.service';
import { MomentModule } from 'angular2-moment';
import { UserEditComponent } from './user-list/user-edit/user-edit.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NewUserComponent } from './user-list/new-user/new-user.component';
import { ChangePasswordComponent } from './user-list/change-password/change-password.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TopMenuComponent,
    SideMenuComponent,
    PageNotFoundComponent,
    LoginPageComponent,
    UserListComponent,
    MainPageComponent,
    UserEditComponent,
    NewUserComponent,
    ChangePasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularResizedEventModule,
    HttpClientModule,
    FormsModule,
    ChartsModule,
    MomentModule,
    NgbModule
  ],
  providers: [
    TopMenuService,
    AuthService,
    UsersListService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    ChartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

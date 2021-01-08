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
import { HttpClientModule } from '@angular/common/http';
import { UserListComponent } from './user-list/user-list.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TopMenuComponent,
    SideMenuComponent,
    PageNotFoundComponent,
    LoginPageComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularResizedEventModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    TopMenuService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

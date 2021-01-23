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
import { UserListItemComponent } from './user-list/user-list-item/user-list-item.component';
import { UsersListService } from './user-list/user-list.service';
import { AuthInterceptor } from './login-page/auth.interceptor';
import { MainPageComponent } from './main-page/main-page.component';
import { ChartsModule } from 'ng2-charts';
import { ChartService } from './shared/chart.service';
import { MomentModule } from 'angular2-moment';
import { BookListComponent } from './book-list/book-list.component';
import { BookListAddComponent } from './book-list/book-list-add/book-list-add.component';
import { BookListItemComponent } from './book-list/book-list-item/book-list-item.component';
import { BookListService } from './book-list/book-list.service';
import { BookListEditComponent } from './book-list/book-list-edit/book-list-edit.component';
import { InventoryListService } from './inventory-list/inventory-list.service';
import { InventoryListComponent } from './inventory-list/inventory-list.component';
import { InventoryListAddComponent } from './inventory-list/inventory-list-add/inventory-list-add.component';
import { InventoryListItemComponent } from './inventory-list/inventory-list-item/inventory-list-item.component';
import { InventoryListEditComponent } from './inventory-list/inventory-list-edit/inventory-list-edit.component';
import { BookBorrowListComponent } from './book-borrow-list/book-borrow-list.component';
import { BookBorrowListItemComponent } from './book-borrow-list/book-borrow-list-item/book-borrow-list-item.component';
import { BookBorrowListService } from './book-borrow-list/book-borrow-list.service';
import { BookBorrowListAddComponent } from './book-borrow-list/book-borrow-list-add/book-borrow-list-add.component';
import { BookBorrowListEditComponent } from './book-borrow-list/book-borrow-list-edit/book-borrow-list-edit.component';
import { NewUserComponent } from './user-list/new-user/new-user.component';
import { ChangePasswordComponent } from './user-list/change-password/change-password.component';
import { UserEditComponent } from './user-list/user-edit/user-edit.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TopMenuComponent,
    SideMenuComponent,
    PageNotFoundComponent,
    LoginPageComponent,
    UserListComponent,
    UserListItemComponent,
    MainPageComponent,
    BookListComponent,
    BookListItemComponent,
    BookListAddComponent,
    BookListEditComponent,
    InventoryListComponent,
    InventoryListItemComponent,
    InventoryListAddComponent,
    InventoryListEditComponent,
    BookBorrowListComponent,
    BookBorrowListItemComponent,
    BookBorrowListAddComponent,
    BookBorrowListEditComponent,
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
    BookListService,
    InventoryListService,
    BookBorrowListService,
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

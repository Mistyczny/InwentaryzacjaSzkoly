import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import {Router} from "@angular/router"

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  error: string;
  public login: string;
  public password: string;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.error = "";
    this.login = "";
    this.password = "";
  }

  submit() {
    if((this.login.length == 0) || (this.password.length == 0)) {
      this.error = "Password or username field is blank";
      return;
    }
    console.log(this.login + ' ' + this.password);
    this.authService.signIn(this.login, this.password).subscribe((data: any) => {
      console.log(data);
      this.error = "";
      if(data.status === true) {
        console.log(data.user);
        this.authService.setSession(JSON.stringify(data.user));
        this.router.navigate(['dashboard']);
        return;
      }
      else {
        this.error = data.message;
      }
    });
  }

}

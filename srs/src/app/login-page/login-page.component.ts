import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  error: string;
  public login: string;
  public password: string;

  constructor() { }

  ngOnInit(): void {
    this.error = "";
    this.login = "";
    this.password = "";
  }

  submit() {

  }

}

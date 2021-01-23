import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/model/user.model';
import { UsersListService } from '../user-list.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  user: User = new User("", "", "", "", new Date());

  password: string;
  newpassword: string;

  error: string;

  constructor(private userService: UsersListService, private router: Router) { }

  ngOnInit(): void {
  }

  changePassword() {
    this.error = "";
    if((this.password !== this.newpassword)) {
      this.error = "Passwords are not equals.";
      return;
    }

    if((this.password.length < 8) || (this.password.length > 32)) {
      this.error = "Password must be between 8 and 32 characters length";
      return;
    }

    if((this.newpassword.length < 8) || (this.newpassword.length > 32)) {
      this.error = "New password must be between 8 and 32 characters length";
      return;
    }

    this.user.password = this.password;
    
    this.userService.changeUserPassword(this.user).toPromise().then((data: any) => {
      console.log(data);
      if(data.status === true) {
        this.router.navigate(['dashboard', 'users']);
      }
      else {
        this.error = data.message;
      }
    });
  }

}

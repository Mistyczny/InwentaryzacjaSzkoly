import { Component, OnInit } from '@angular/core';
import { User } from '../shared/model/user.model';
import { UsersListService } from './user-list.service';
import {Book} from '../book-list/book.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[] = [];

  constructor(private usersListService: UsersListService) { }

  ngOnInit(): void {
    this.reloadUsers();
  }

  reloadUsers(): void {
    this.users = [];
    this.usersListService.getUsers().subscribe((data: any) => {
      console.log(data);
      if (data.status === true) {
        data.data.forEach(element => {
          this.users.push(new User(element.login, element.firstName, element.lastName, element.creationDate));
        });
      }
    });
  }

  removeUser(login: string): void {
    this.usersListService.deleteUser(login).subscribe((data: any) => {
        console.log(data);
        if (data.status === true) {
            this.reloadUsers();
        }
    });
  }
}

import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { User } from '../shared/model/user.model';
import { UsersListService } from './user-list.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[] = [];

  constructor(private usersListService: UsersListService) { }

  ngOnInit(): void {
    this.usersListService.getUsers().subscribe((data: any) => {
      console.log(data);
      if(data.status === true) {
          data.data.forEach(element => {
              this.users.push(new User(element._id, element.login, element.firstName, element.lastName, element.creationDate));
          });
      }
    });
  }

  deleteUser(id: string) {
    this.usersListService.deleteUser(id).toPromise().then((data: any) => {
      console.log(data);
      if(data.status === true) {
        var i = 0;
        this.users.forEach((user: User) => {
          if(user.id === id) {
            this.users.slice(i, 1);
            return;
          }
          i++;
        });
      }
    });
  }
}

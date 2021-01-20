import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/shared/model/user.model';
import { UserListComponent } from '../user-list.component';

@Component({
  selector: 'app-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.css']
})
export class UserListItemComponent implements OnInit {

  @Input() user: User;

  constructor(private userListComponent: UserListComponent) {
  }

  ngOnInit(): void {
  }

  onEditUser(): void {
      console.log('Edit this user: ' + this.user.login);
  }

  onRemoveUser(): void {
      this.userListComponent.removeUser(this.user.login);
  }
}
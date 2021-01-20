import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { root } from 'rxjs/internal-compatibility';
import { User } from '../../shared/model/user.model';
import { UsersListService } from '../user-list.service';

@Component({
  selector: 'app-user-list-add',
  templateUrl: './user-list-add.component.html',
  styleUrls: ['./user-list-add.component.css']
})
export class UserListAddComponent implements OnInit {
  model = new User('', '', '', new Date());
  submitted = false;

  constructor(private usersListService: UsersListService,
              private route: ActivatedRoute,
              private router: Router) {}

  ngOnInit(): void {
  }

  onSubmitBook(): void {
      this.submitted = true;
      this.usersListService.postUser(this.model).toPromise().then((data: any) => {
          if (data.status === true) {
            this.router.navigate(['/dashboard/users'], {relativeTo: root});
          }
      });
  }
}

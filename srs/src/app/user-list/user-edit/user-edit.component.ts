import { Component, EventEmitter, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { User } from 'src/app/shared/model/user.model';
import { UsersListService } from '../user-list.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  user: User = new User("", "", "", "", new Date()); //Empty user default

  private routeChanged: EventEmitter<string> = new EventEmitter<string>();
  
  id: string;

  constructor(private userService: UsersListService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.routeChanged.subscribe((id: string) => {
      this.userService.getUser(id).toPromise().then((data : any) => {
        if(data.status === true) {
          this.user = new User(id, data.data[0].login, data.data[0].firstName, data.data[0].lastName, data.data[0].creationDate);
          console.log(this.user);
        }
      });
    });

    

    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.routeChanged.emit(this.id);
    });
  }

  saveUser() {
    this.userService.saveUser(this.user).toPromise().then((data: any) => {
      console.log(data);
      if(data.status === true) {
        console.log("User saved");
        this.router.navigate(['dashboard', 'users']);
      }
    });
  }

  closeWithoutSaving() {
    this.router.navigate(['dashboard', 'users']);
  }

}

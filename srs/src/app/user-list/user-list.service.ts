import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../shared/model/user.model';

@Injectable()
export class UsersListService {

    constructor(private http: HttpClient) {}

    getUsers() {
        return this.http.get("http://localhost:3000/users");
    }

    getUser(id: string) {
        return this.http.get("http://localhost:3000/user/" + id);
    }

    saveUser(user: User) {
        return this.http.post("http://localhost:3000/user/" + user.id, user);
    }

    insertUser(user: User) {
        return this.http.put("http://localhost:3000/user", user);
    }

    deleteUser(id: string) {
        return this.http.delete("http://localhost:3000/user/" + id);
    }

    changeUserPassword(user: User) {
        return this.http.post("http://localhost:3000/user/changePassword/" + user.id, { password: user.password } );
    }
}

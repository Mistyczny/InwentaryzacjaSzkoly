import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class UsersListService {
    constructor(private http: HttpClient) {}

    getUsers(): Observable<object> {
        return this.http.get('http://localhost:3000/users');
    }

    deleteUser(login: string): void {
        console.log('Remove user by service: ' + login);
    }
}

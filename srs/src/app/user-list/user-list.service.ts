import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {User} from '../shared/model/user.model';

@Injectable()
export class UsersListService {
    constructor(private http: HttpClient) {}

    getUsers(): Observable<object> {
        return this.http.get('http://localhost:3000/users');
    }

    deleteUser(login: string): Observable<void> {
        return this.http.delete<void>('http://localhost:3000/users/' + login);
    }

    postUser(user: User): Observable<object> {
        return this.http.post('http://localhost:3000/users/', user);
    }
}

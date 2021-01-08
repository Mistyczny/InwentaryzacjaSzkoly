import { Injectable } from '@angular/core';
import { User } from '../shared/model/user.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {
    currnetUser: User;

    sessionToken: string;
    constructor(private http: HttpClient) {
        this.sessionToken = localStorage.getItem("session_token");
    }

    setSession(token: string) {
        this.sessionToken = token;
        localStorage.setItem("session_token", token);
    }

    authorize(login, password) {

    }
}
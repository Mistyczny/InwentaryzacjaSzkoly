import { Injectable } from '@angular/core';
import { User } from '../shared/model/user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
    currnetUser: User;

    constructor(private http: HttpClient, private router: Router) {}

    setSession(user) {      
        localStorage.setItem("currentUser", user);
    }

    getSession() : string {
        return localStorage.getItem("currentUser");
    }

    signIn(login, password) {
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this.http.post("http://localhost:3000/signin", {
            login: login,
            password: password
        }, {headers: headers});
    }

    signOut() : void {
        localStorage.removeItem("currentUser");
        this.router.navigate(['login']);
    }


}
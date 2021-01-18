import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {tap} from 'rxjs/operators';
import {Router} from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private router: Router, private authService: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    var currentUser = null;
    try {
       currentUser = JSON.parse(this.authService.getSession());
    }
    catch(e) {
      console.log("User is not defined in local storage: " + currentUser);
      currentUser = null;
    }
    if (currentUser && currentUser.accessToken) {
      console.log(currentUser.accessToken)
      request = request.clone({
        setHeaders: {
          'Content-Type': 'application/json',
          'Authorization': currentUser.accessToken
        }
      });
    }

    return next.handle(request).pipe( tap(() => {},
      (err: any) => {
      if (err instanceof HttpErrorResponse) {
        if (err.status !== 401) {
         return;
        }
        this.router.navigate(['login']);
      }
    }));
  }
}
import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import { AlertService } from './alert.service';
import 'rxjs/operator/map';
import {mergeMap} from 'rxjs/internal/operators';
import {User} from '../_models';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class AuthenticationService {
  constructor(
    private http: HttpClient,
    private alertService: AlertService
  ) { }

  login(username: string, password: string) {
    return this.http.options('/api/login')
      .pipe(
        mergeMap(value =>
          // this.http.post('/api/login', JSON.stringify({ username: username, password: password }),
          this.http.post('/api/login', null, {params: {username: username, password: password}, observe: 'response'})
            .map((response: HttpResponse) => {
              if (response.ok) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', username);
              } else {
                throw Observable.throwError(response.status + ' ' + response.statusText);
              }
            })
        )
      );
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }

  register(user: User) {
    return this.http.options('/api/login')
      .pipe(
        mergeMap(() =>
          this.http.post('/api/register', null, {
            params: {
              firstname: user.firstName,
              lastname: user.lastName,
              login: user.login,
              email: user.email,
              password: user.password
            }
          })
        )
      );
  }
}

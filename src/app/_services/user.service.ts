import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

import { User } from '../_models/index';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) { }

  // getAll() {
  //   return this.http.get('/api/users', this.jwt()).map((response) => response.json());
  // }

  // getById(id: number) {
  //   return this.http.get('/api/users/' + id, this.jwt()).map((response: Response) => response.json());
  // }

  create(user: User) {
    return this.http.post('/api/users', user, this.jwt());
  }

  // update(user: User) {
  //   return this.http.put('/api/users/' + user.id, user, this.jwt()).map((response: Response) => response.json());
  // }

  // delete(id: number) {
  //   return this.http.delete('/api/users/' + id, this.jwt()).map((response: Response) => response.json());
  // }

  // private helper methods

  private jwt() {
    // create authorization header with jwt token
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.token) {
      const headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
      // return new RequestOptions({ headers: headers });
      return null;
    }
  }
}

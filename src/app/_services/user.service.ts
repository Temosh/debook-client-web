import {Injectable} from '@angular/core';
import {User} from '../_models';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) { }

  // getAll() {
  //   return this.http.get('/api/users', this.jwt()).map((response) => response.json());
  // }

  getByLogin(login: string): Observable<User[]> {
    const params = new HttpParams().append('login', login);
    return this.http.get<User[]>('/api/users', {params: params});
  }

  // getById(id: number) {
  //   return this.http.get('/api/users/' + id, this.jwt()).map((response: Response) => response.json());
  // }

  // create(user: Profile) {
  //   return this.http.post('/api/users', user, this.jwt());
  // }

  // update(user: Profile) {
  //   return this.http.put('/api/users/' + user.id, user, this.jwt()).map((response: Response) => response.json());
  // }

  // delete(id: number) {
  //   return this.http.delete('/api/users/' + id, this.jwt()).map((response: Response) => response.json());
  // }

  // private helper methods

  // TODO Need to check what is it and why it was added here
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

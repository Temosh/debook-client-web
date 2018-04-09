import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {Person} from '../_models/person';

@Injectable()
export class DebtService {
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Person[]>('/api/person');
  }

  create() {

  }
}

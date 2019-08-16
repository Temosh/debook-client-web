import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Person} from '../_models/person';

@Injectable()
export class PersonService {
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Person[]>('/api/person');
  }

  create(person: Person) {
    return this.http.post<any>('/api/person', person);
  }
}

import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {Debt, Person} from '../_models';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class DebtService {
  constructor(private http: HttpClient) { }

  getAll() {

  }

  create(debt: Debt, person: Person): Observable<Debt> {
    return this.http.post<Debt>('/api/person/' + person.personId + '/debt', debt);
  }

  update(debt: Debt, person: Person, currencyId: number): Observable<Debt> {
    return this.http.patch<Debt>('/api/person/' + person.personId + '/debt/' + currencyId, debt);
  }
}

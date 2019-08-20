import {Injectable, OnDestroy} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Debt, Person} from '../_models';
import {AlertService} from './alert.service';
import {Observable} from 'rxjs';

@Injectable()
export class PersonService implements OnDestroy {

  people: Map<String, Person> = new Map();

  constructor(
    private http: HttpClient,
    private alertService: AlertService
  ) {
  }

  init(): void {
    this.loadAllPeople();
  }

  ngOnDestroy(): void {
    console.log('PersonService.onDestroy');
  }

  get(personId: string) {
    return this.people.get(personId);
  }

  getAll(): Map<String, Person> {
    return this.people;
  }

  create(person: Person): Observable<Person> {
    return this.http.post<Person>('/api/person', person);
  }

  addPerson(person: Person) {
    this.people.set(person.personId, person);
  }

  addDebt(person: Person, debt: Debt) {
    this.people.get(person.personId).debts.push(debt);
  }

  updateDebt(person: Person, modifiedDebt: Debt) {
    this.people.get(person.personId).debts.forEach((debt: Debt) => {
      if (debt.id === modifiedDebt.id) {
        debt.currency = modifiedDebt.currency;
        debt.creditType = modifiedDebt.creditType;
        debt.value = modifiedDebt.value;
      }
    });
  }

  private loadAllPeople() {
    this.http.get<Person[]>('/api/person')
      .subscribe(
        (people: Person[]) => {
          people.forEach((person: Person) => this.people.set(person.personId, person));
        },
        error => this.alertService.error('Failed to load people (' + error.status + ' - ' + error.statusText + ')') // TODO Remove status code
      );
  }
}

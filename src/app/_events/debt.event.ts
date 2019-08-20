import {Debt, Person} from '../_models';
import {Observable} from 'rxjs';

export class DebtCreationEvent {
  person: Person;
  debtObservable: Observable<Debt>;
}

export class DebtUpdateEvent {
  person: Person;
  debtObservable: Observable<Debt>;
}

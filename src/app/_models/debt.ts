import {Currency} from './currency';
import {Person} from './person';
import {CreditType} from './credit_type';

export class Debt {
  id: number;
  person: Person;
  currency: Currency;
  creditType: CreditType;
  value: number;
}

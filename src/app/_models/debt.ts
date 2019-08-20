import {Currency} from './currency';
import {CreditType} from './credit_type';

export class Debt {
  id: number;
  currency: Currency;
  creditType: CreditType;
  value: number;
}

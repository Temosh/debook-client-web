import {Currency} from './currency';

export class DebtRequestData {
  currency: Currency;
  value: number;
  creditType: string;
  message: string;
  creationTime: Date;
  updaterId: string;
}

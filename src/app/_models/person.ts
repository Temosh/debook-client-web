import {Debt} from './debt';

export class Person {
  personId: string;
  name: string;
  surname: string;
  connectedUserId: string;
  connectionApproved: boolean;
  debts: Debt[];
}

import {DebtRequestData} from './debt_request_data';
import {User} from './user';

export class Request {
  readonly id: string;
  readonly type: string;
  readonly user: User;
  readonly personId: string = null;
  readonly message: string = null;
  processed: boolean;
  rejected: boolean;
  rejectMessage: string = null;
  readonly lastUpdaterId: string = null;
  data: DebtRequestData[] = null;

  // TODO Make all fields read only and add methods for accepting/rejecting request, modifying debt data
}

export const CONNECTION_REQUEST = 'CONNECTION';
export const DEBT_REQUEST = 'DEBT';

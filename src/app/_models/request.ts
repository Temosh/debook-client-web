import {DebtRequestData} from './debt_request_data';

export class Request {
  readonly type: string;
  readonly userId: string;
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

import {Observable} from 'rxjs';
import {Request} from '../_models';

export class RequestEvent {
  request: Request;
  action: RequestAction;
  observable: Observable<Request>;
}

export enum RequestAction {
  NEW,
  CANCEL,
  ACCEPT,
  REJECT,
  MODIFY
}

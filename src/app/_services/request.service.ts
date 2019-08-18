import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Request} from '../_models';
import {Observable} from 'rxjs';

@Injectable()
export class RequestService {

  constructor(private http: HttpClient) {
  }

  create(request: Request): Observable<Request> {
    return this.http.post<Request>('/api/requests', request);
  }

  getAllPending(): Observable<Request[]> {
    return this.http.get<Request[]>('/api/requests/pending');
  }
}

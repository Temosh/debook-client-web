import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Request} from '../_models';
import {Observable} from 'rxjs';

@Injectable()
export class RequestService {

  private pendingRequests: Request[];

  constructor(private http: HttpClient) {
  }

  create(request: Request): Observable<Request> {
    return this.http.post<Request>('/api/requests', request);
  }

  getAllPending(): Request[] {
    if (this.pendingRequests === undefined) {
      this.pendingRequests = [];
      this.http.get<Request[]>('/api/requests/pending').subscribe(
        (requests: Request[]) => this.pendingRequests = requests
      );
    }
    return this.pendingRequests;
  }
}

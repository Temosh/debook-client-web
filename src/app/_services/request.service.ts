import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Request} from '../_models';
import {Observable} from 'rxjs';
import {AlertService} from './alert.service';

@Injectable()
export class RequestService {

  private pendingRequests: Request[];

  constructor(
    private http: HttpClient,
    private alertService: AlertService
  ) {
  }

  removePendingRequest(request: Request) {
    this.pendingRequests = this.pendingRequests.filter((r: Request) => r.id !== request.id);
  }

  getAllPending(): Request[] {
    if (this.pendingRequests === undefined) {
      this.pendingRequests = [];
      this.http.get<Request[]>('/api/requests/pending').subscribe(
        (requests: Request[]) => this.pendingRequests = requests,
        (error: HttpErrorResponse) => this.alertService.error('Failed to reject request (' + error.status + ' - ' + error.statusText + ')')
      );
    }
    return this.pendingRequests;
  }

  getIncomingCount(): number {
    return this.pendingRequests.filter((request: Request) => request.lastUpdaterId === request.user.id).length;
  }

  create(request: Request): Observable<Request> {
    return this.http.post<Request>('/api/requests', request);
  }

  update(request: Request): Observable<Request> {
    return this.http.put<Request>('/api/requests/' + request.id, request);
  }
}

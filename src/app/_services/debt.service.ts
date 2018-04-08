import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {Debt} from '../_models/debt';

@Injectable()
export class DebtService {
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Debt[]>('/api/debt/local');
  }
}

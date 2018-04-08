import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {LocalDebt} from '../_models/local_debt';

@Injectable()
export class LocalDebtService {
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<LocalDebt[]>('/api/debt/local');
  }
}

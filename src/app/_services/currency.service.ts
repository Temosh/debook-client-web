import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Currency} from '../_models';

@Injectable()
export class CurrencyService {
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Currency[]>('/api/currency');
  }
}

import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Currency} from '../_models';

@Injectable()
export class CurrencyService {

  currencies: Map<String, Currency> = new Map();

  constructor(private http: HttpClient) {
  }

  init(): void {
    this.loadAllCurrencies();
  }

  getAll() {
    return this.currencies;
  }

  private loadAllCurrencies() {
    this.http.get<Currency[]>('/api/currency')
      .subscribe(
        ((currencies: Currency[]) => {
          currencies.forEach((currency: Currency) => this.currencies.set(currency.id, currency));
        })
      );
  }
}

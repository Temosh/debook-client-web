import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Debt} from '../_models/debt';
import {Currency, Person} from '../_models';
import {CurrencyService} from '../_services/currency.service';
import {DEBT_CREDIT_TYPE, LOAN_CREDIT_TYPE} from '../_models/credit_type';
import {DebtService} from '../_services';
import {Observable} from 'rxjs/Rx';
declare var $: any;

@Component({
  moduleId: module.id,
  selector: 'app-modal-new-debt',
  templateUrl: 'debt_new.component.html'
})

export class DebtNewComponent implements OnInit {
  @Input() person: Person;
  @Output() close: EventEmitter<Observable<Debt>> = new EventEmitter();

  debt: Debt = new Debt();
  debtValue: number;

  currencies: Currency[];

  constructor(
    private currencyService: CurrencyService,
    private debtService: DebtService
  ) { }

  ngOnInit() {
    this.currencyService.getAll().subscribe((currencies: Currency[]) => this.currencies = currencies);
  }

  createDebt() {
    if (this.debtValue >= 0) {
      this.debt.creditType = LOAN_CREDIT_TYPE;
      this.debt.value = this.debtValue;
    } else {
      this.debt.creditType = DEBT_CREDIT_TYPE;
      this.debt.value = Math.abs(this.debtValue);
    }

    $('#modalNewDebt').modal('hide');
    this.close.emit(this.debtService.create(this.debt, this.person));

    // this.debt.currency = null; // TODO
    // this.debtValue = null; // TODO
  }

  cancel() {
    $('#modalNewDebt').modal('hide');
  }
}

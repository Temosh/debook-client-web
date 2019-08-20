import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Debt, Currency, Person, DEBT_CREDIT_TYPE, LOAN_CREDIT_TYPE} from '../_models';
import {DebtService, CurrencyService} from '../_services';
import {DebtCreationEvent} from '../_events';
declare var $: any;

@Component({
  moduleId: module.id,
  selector: 'app-modal-new-debt',
  templateUrl: 'debt_new.component.html'
})
export class DebtNewComponent implements OnInit {
  @Input() person: Person;
  @Output() close: EventEmitter<DebtCreationEvent> = new EventEmitter();

  debt: Debt = new Debt();
  debtValue: number;

  currencies: Map<String, Currency>;

  constructor(
    private currencyService: CurrencyService,
    private debtService: DebtService
  ) { }

  ngOnInit() {
    this.currencies = this.currencyService.getAll();
  }

  createDebt() {
    if (this.debtValue >= 0) {
      this.debt.creditType = LOAN_CREDIT_TYPE;
      this.debt.value = this.debtValue;
    } else {
      this.debt.creditType = DEBT_CREDIT_TYPE;
      this.debt.value = Math.abs(this.debtValue);
    }

    this.close.emit(<DebtCreationEvent>{
      person: this.person,
      debtObservable: this.debtService.create(this.debt, this.person)
    });
    $('#modalNewDebt').modal('hide');

    // this.debt.currency = null; // TODO
    // this.debtValue = null; // TODO
  }

  cancel() {
    $('#modalNewDebt').modal('hide');
  }
}

import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Debt} from '../_models/debt';
import {DEBT_CREDIT_TYPE, LOAN_CREDIT_TYPE} from '../_models/credit_type';
import {Person} from '../_models';
import {DebtService} from '../_services';
import {Observable} from 'rxjs/Rx';
declare var $: any;

@Component({
  moduleId: module.id,
  selector: 'app-modal-edit-debt',
  templateUrl: 'debt_edit.component.html'
})

export class DebtEditComponent implements OnInit {
  @Input() debt: Debt;
  @Input() person: Person;
  @Input() newDebtValue: number;
  @Output() close: EventEmitter<Observable<Debt>> = new EventEmitter();

  constructor(
    private debtService: DebtService
  ) { }

  ngOnInit() {
  }

  save() {
    const newDebt: Debt = {...this.debt};

    if (this.newDebtValue >= 0) {
      newDebt.creditType = LOAN_CREDIT_TYPE;
      newDebt.value = this.newDebtValue;
    } else {
      newDebt.creditType = DEBT_CREDIT_TYPE;
      newDebt.value = Math.abs(this.newDebtValue);
    }

    $('#modalEditDebt').modal('hide');
    this.close.emit(this.debtService.update(newDebt, this.person, newDebt.currency.id));
  }

  cancel() {
    $('#modalEditDebt').modal('hide');
  }
}

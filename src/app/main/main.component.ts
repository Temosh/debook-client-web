import {Component, OnInit} from '@angular/core';
import {DebtService, UserService} from '../_services';
import {Debt} from '../_models/debt';


@Component({
  moduleId: module.id,
  templateUrl: './main.component.html'
})

export class MainComponent implements OnInit {
  currentUser: string;
  debts: Debt[] = [];

  constructor(
    private userService: UserService,
    private localDebtService: DebtService
  ) {
    this.currentUser = localStorage.getItem('currentUser');
  }

  ngOnInit() {
    this.loadAllLocalDebts();
  }

  private loadAllLocalDebts() {
    this.localDebtService.getAll()
      .subscribe(
        (localDebts: Debt[]) => this.debts = localDebts
      );
  }
}

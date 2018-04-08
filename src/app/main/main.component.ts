import {Component, OnInit} from '@angular/core';
import {LocalDebtService, UserService} from '../_services';
import {LocalDebt} from '../_models/local_debt';


@Component({
  moduleId: module.id,
  templateUrl: './main.component.html'
})

export class MainComponent implements OnInit {
  currentUser: string;
  localDebts: LocalDebt[] = [];

  constructor(
    private userService: UserService,
    private localDebtService: LocalDebtService
  ) {
    this.currentUser = localStorage.getItem('currentUser');
  }

  ngOnInit() {
    this.loadAllLocalDebts();
  }

  private loadAllLocalDebts() {
    this.localDebtService.getAll()
      .subscribe(
        (localDebts: LocalDebt[]) => this.localDebts = localDebts
      );
  }
}

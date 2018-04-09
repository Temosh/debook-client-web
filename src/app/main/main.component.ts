import {Component, OnInit} from '@angular/core';
import {DebtService, UserService} from '../_services';
import {Person} from '../_models/person';

@Component({
  moduleId: module.id,
  templateUrl: './main.component.html'
})

export class MainComponent implements OnInit {
  currentUser: string;
  persons: Person[] = [];

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
        (persons: Person[]) => this.persons = persons
      );
  }
}

import {Component, OnInit} from '@angular/core';
import {AlertService, PersonService, UserService} from '../_services';
import {Person, Debt, Request, LOAN_CREDIT_TYPE} from '../_models';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {HttpErrorResponse} from '@angular/common/http';
declare var $: any;

@Component({
  moduleId: module.id,
  templateUrl: './main.component.html'
})

export class MainComponent implements OnInit {
  currentUser: string;
  currentPerson: Person;
  currentDebt: Debt;

  persons: Person[] = [];

  constructor(
    private router: Router,
    private alertService: AlertService,
    private userService: UserService,
    private personService: PersonService
  ) {
    this.currentUser = localStorage.getItem('currentUser'); // TODO
  }

  ngOnInit() {
    this.loadAllLocalDebts();
  }

  private loadAllLocalDebts() {
    this.personService.getAll()
      .subscribe(
        (persons: Person[]) => this.persons = persons
      );
  }

  getDebtValueWithSign(debt: Debt): number {
    return debt.creditType.type === LOAN_CREDIT_TYPE.type ? debt.value : -debt.value;
  }

  public btnNewPerson() {
    this.router.navigate(['/person/new']);
  }

  public btnNewConnection() {
    $('#modalNewConnectionRequest').modal();
  }

  public btnNewDebt(person: Person) {
    this.currentPerson = person;
    console.log(this.currentPerson);
    $('#modalNewDebt').modal();
  }

  public btnEditDebt(debt: Debt, person: Person) {
    this.currentDebt = debt;
    this.currentPerson = person;
    console.log(this.currentPerson);
    $('#modalEditDebt').modal();
  }

  public onNewDebt(observable: Observable<Debt>) {
    this.currentDebt = null;
    this.currentPerson = null;

    observable.subscribe(
      (debt: Debt) => {
        this.loadAllLocalDebts();
      },

      (error: HttpErrorResponse) => {
        this.alertService.error('Failed to add new debt (' + error.status + ' - ' + error.statusText + ')'); // TODO Remove status code
      }
    );
  }

  public onNewConnection(observable: Observable<Request>) {
    observable.subscribe(
      () => {
        // Do nothing
      },

      (error: HttpErrorResponse) => {
        this.alertService.error('Failed to create connection request (' + error.status + ' - ' + error.statusText + ')'); // TODO Remove status code
      }
    );
  }

  // TODO The same as onNewDebt()
  public onDebtChange(observable: Observable<Debt>) {
    this.currentDebt = null;
    this.currentPerson = null;

    observable.subscribe(
      (debt: Debt) => {
        this.loadAllLocalDebts();
      },

      (error: HttpErrorResponse) => {
        this.alertService.error('Failed to update new debt (' + error.status + ' - ' + error.statusText + ')'); // TODO Remove status code
      }
    );
  }
}

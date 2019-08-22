import {Component, OnInit} from '@angular/core';
import {AlertService, PersonService, UserService} from '../_services';
import {Person, Debt, Request, LOAN_CREDIT_TYPE} from '../_models';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {HttpErrorResponse} from '@angular/common/http';
import {DebtCreationEvent, DebtUpdateEvent} from '../_events';

declare var $: any;

@Component({
  moduleId: module.id,
  templateUrl: 'people.component.html'
})
export class PeopleComponent implements OnInit {
  // TODO Should be enum
  private readonly LOAN_CREDIT_TYPE: string = 'LOAN';
  private readonly DEBT_CREDIT_TYPE: string = 'DEBT';
  // -------------------

  currentUser: string;
  currentPerson: Person;
  currentDebt: Debt;

  constructor(
    private router: Router,
    private alertService: AlertService,
    private userService: UserService,
    private personService: PersonService
  ) {
    this.currentUser = localStorage.getItem('currentUser'); // TODO
  }

  ngOnInit() {
  }

  getDebtValueWithSign(debt: Debt): number {
    return debt.creditType.type === LOAN_CREDIT_TYPE.type ? debt.value : -debt.value;
  }

  public btnNewPerson() {
    this.router.navigate(['/person/new']);
  }

  public btnNewConnection(person: Person = null) {
    this.currentPerson = person;
    $('#modalNewConnectionRequest').modal();
  }

  public btnDeleteConnection(person: Person) {
  }

  public btnNewDebtRequest(person: Person) {
  }

  public btnNewDebt(person: Person) {
    this.currentPerson = person;
    $('#modalNewDebt').modal();
  }

  public btnEditDebt(debt: Debt, person: Person) {
    this.currentDebt = debt;
    this.currentPerson = person;
    $('#modalEditDebt').modal();
  }

  public onNewDebt(debtEvent: DebtCreationEvent) {
    this.currentDebt = null;
    this.currentPerson = null;

    debtEvent.debtObservable.subscribe(
      (debt: Debt) => {
        this.personService.addDebt(debtEvent.person, debt);
      },

      (error: HttpErrorResponse) => {
        this.alertService.error('Failed to add new debt (' + error.status + ' - ' + error.statusText + ')'); // TODO Remove status code
      }
    );
  }

  public onNewConnection(observable: Observable<Request>) {
    this.currentPerson = null;

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
  public onDebtChange(debEvent: DebtUpdateEvent) {
    this.currentDebt = null;
    this.currentPerson = null;

    debEvent.debtObservable.subscribe(
      (debt: Debt) => {
        console.log(debt);
        this.personService.updateDebt(debEvent.person, debt);
      },

      (error: HttpErrorResponse) => {
        this.alertService.error('Failed to update new debt (' + error.status + ' - ' + error.statusText + ')'); // TODO Remove status code
      }
    );
  }
}

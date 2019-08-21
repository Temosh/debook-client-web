import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs';
import {CONNECTION_REQUEST, DEBT_REQUEST, DebtRequestData, Request} from '../_models';
import {AlertService, PersonService, RequestService, UserService} from '../_services';

declare var $: any;

@Component({
  moduleId: module.id,
  selector: 'app-modal-edit-request',
  templateUrl: 'edit_request.modal.html'
})

export class EditRequestModalComponent implements OnInit {
  // TODO Should be enum
  private readonly CONNECTION_REQUEST: string = CONNECTION_REQUEST;
  private readonly DEBT_REQUEST: string = DEBT_REQUEST;
  private readonly LOAN_CREDIT_TYPE: string = 'LOAN';
  private readonly DEBT_CREDIT_TYPE: string = 'DEBT';
  // -------------------

  @Input() request: Request;
  @Output() action: EventEmitter<Observable<Request>> = new EventEmitter();

  private editMode: boolean = false;
  newDebtData: DebtRequestData;

  constructor(
    private alertService: AlertService,
    private requestService: RequestService,
    private userService: UserService,
    private personService: PersonService,
  ) {
  }

  ngOnInit() {
  }

  close() {
    $('#modalEditRequest').modal('hide');
    this.editMode = false;
  }

  send() {
  }

  reject() {

  }

  accept() {

  }
}

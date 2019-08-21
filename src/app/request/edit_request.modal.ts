import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CONNECTION_REQUEST, DEBT_REQUEST, DebtRequestData, Request} from '../_models';
import {AlertService, PersonService, RequestService, UserService} from '../_services';
import {RequestAction, RequestEvent} from '../_events';

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
  @Output() eventEmitter: EventEmitter<RequestEvent> = new EventEmitter();

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
    const newRequest = {...this.request};
    newRequest.rejected = true;
    newRequest.processed = true;
    this.eventEmitter.emit(<RequestEvent>{
      request: this.request,
      action: RequestAction.REJECT,
      observable: this.requestService.update(newRequest)
    });
    this.close();
  }

  accept() {
    const newRequest = {...this.request};
    newRequest.rejected = false;
    newRequest.processed = true;
    this.eventEmitter.emit(<RequestEvent>{
      request: this.request,
      action: RequestAction.ACCEPT,
      observable: this.requestService.update(newRequest)
    });
    this.close();
  }
}

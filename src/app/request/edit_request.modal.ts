import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Currency, DebtRequestData, Request, RequestType} from '../_models';
import {AlertService, PersonService, RequestService, UserService} from '../_services';
import {RequestAction, RequestEvent} from '../_events';

declare var $: any;

@Component({
  moduleId: module.id,
  selector: 'app-modal-edit-request',
  templateUrl: 'edit_request.modal.html'
})

export class EditRequestModalComponent {

  public requestTypeEnum = RequestType;

  // TODO Should be enum
  private readonly LOAN_CREDIT_TYPE: string = 'LOAN';
  private readonly DEBT_CREDIT_TYPE: string = 'DEBT';
  // -------------------

  @Input() request: Request;
  @Output() eventEmitter: EventEmitter<RequestEvent> = new EventEmitter();

  private editMode: boolean = false;
  private newDebtData: DebtRequestData;
  private debtDataMap: Map<Currency, DebtRequestData> = new Map();

  constructor(
    private alertService: AlertService,
    private requestService: RequestService,
    private userService: UserService,
    private personService: PersonService,
  ) {
  }

  private getDebtDataForm(debtData: DebtRequestData): DebtRequestData {
    return this.debtDataMap.get(debtData.currency);
  }

  private close() {
    $('#modalEditRequest').modal('hide');
    this.editMode = false;
  }

  private send() {
  }

  private reject() {
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

  private accept() {
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

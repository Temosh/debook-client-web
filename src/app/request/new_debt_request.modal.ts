import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Currency, DEBT_REQUEST, DebtRequestData, Person, Request, User} from '../_models';
import {CurrencyService, RequestService, UserService} from '../_services';
import {RequestAction, RequestEvent} from '../_events';
import {NgForm} from '@angular/forms';

declare var $: any;

@Component({
  moduleId: module.id,
  selector: 'app-modal-new-debt-request',
  templateUrl: 'new_debt_request.modal.html'
})

export class NewDebtRequestModalComponent implements OnInit {
  // TODO Should be enum
  private readonly LOAN_CREDIT_TYPE: string = 'LOAN';
  private readonly DEBT_CREDIT_TYPE: string = 'DEBT';
  // -------------------

  @Input() person: Person;
  @Output() eventEmitter: EventEmitter<RequestEvent> = new EventEmitter();
  @ViewChild('f', {static: true}) debtForm: NgForm;

  private availableCurrencies: Map<string, Currency>;
  private newDebtData: DebtRequestData = new DebtRequestData();

  constructor(
    private requestService: RequestService,
    private userService: UserService,
    private currencyService: CurrencyService,
  ) {
  }

  ngOnInit(): void {
    this.availableCurrencies = this.currencyService.getAll();
  }

  private getCreditTypes(): string[] {
    return [this.LOAN_CREDIT_TYPE, this.DEBT_CREDIT_TYPE];
  }

  private send(): void {
    const newDebtRequest: Request = <Request>{
      type: DEBT_REQUEST,
      personId: this.person.personId,
      user: <User>{
        id: this.person.connectedUserId
      },
      data: [this.newDebtData]
    };

    this.eventEmitter.emit(<RequestEvent>{
      request: newDebtRequest,
      action: RequestAction.NEW,
      observable: this.requestService.create(newDebtRequest)
    });
    this.close();
  }

  private close(): void {
    this.debtForm.resetForm();
    this.newDebtData = new DebtRequestData();
    $('#modalNewDebtRequest').modal('hide');
  }
}

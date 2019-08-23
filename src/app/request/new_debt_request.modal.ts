import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Currency, DebtRequestData, Person, Request, RequestType, User} from '../_models';
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

  public availableCurrencies: Map<string, Currency>;
  public newDebtData: DebtRequestData = new DebtRequestData();

  constructor(
    private requestService: RequestService,
    private userService: UserService,
    private currencyService: CurrencyService,
  ) {
  }

  ngOnInit(): void {
    this.availableCurrencies = this.currencyService.getAll();
  }

  public getCreditTypes(): string[] {
    return [this.LOAN_CREDIT_TYPE, this.DEBT_CREDIT_TYPE];
  }

  public send(): void {
    const newDebtRequest: Request = <Request>{
      type: RequestType.DEBT,
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

  public close(): void {
    this.debtForm.resetForm();
    this.newDebtData = new DebtRequestData();
    $('#modalNewDebtRequest').modal('hide');
  }
}

import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AlertService, PersonService, RequestService} from '../_services';
import {CONNECTION_REQUEST, DEBT_REQUEST, Request} from '../_models';

declare var $: any;

@Component({
  moduleId: module.id,
  templateUrl: 'requests.component.html',
})

export class RequestsComponent implements OnInit {
  // TODO Should be enum
  private readonly CONNECTION_REQUEST: string = CONNECTION_REQUEST;
  private readonly DEBT_REQUEST: string = DEBT_REQUEST;
  private readonly LOAN_CREDIT_TYPE: string = 'LOAN';
  private readonly DEBT_CREDIT_TYPE: string = 'DEBT';
  // -------------------

  private selectedRequest: Request;

  constructor(
    private router: Router,
    private alertService: AlertService,
    private requestService: RequestService,
    private personService: PersonService
  ) {
  }

  ngOnInit(): void {
  }

  onRequestClick(request: Request) {
    this.selectedRequest = request;
    $('#modalEditRequest').modal();
  }

  onRequestAction($event) {

  }
}

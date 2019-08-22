import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AlertService, PersonService, RequestService} from '../_services';
import {CONNECTION_REQUEST, DEBT_REQUEST, Request} from '../_models';
import {RequestAction, RequestEvent} from '../_events';
import {HttpErrorResponse} from '@angular/common/http';

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

  public selectedRequest: Request;

  constructor(
    private router: Router,
    private alertService: AlertService,
    public requestService: RequestService,
    private personService: PersonService
  ) {
  }

  ngOnInit(): void {
  }

  onRequestClick(request: Request) {
    this.selectedRequest = request;
    $('#modalEditRequest').modal();
  }

  onRequestEvent(event: RequestEvent) {
    switch (event.action) {
      case RequestAction.ACCEPT:
        event.observable.subscribe(
          (request: Request) => {
            this.requestService.removePendingRequest(event.request);
          },
          (error: HttpErrorResponse) => {
            console.log(error);
            this.alertService.error('Failed to accept request (' + error.status + ' - ' + error.statusText + ')'); // TODO Remove status code
          });
        break;
      case RequestAction.REJECT:
        event.observable.subscribe(
          (request: Request) => {
            this.requestService.removePendingRequest(event.request);
          },
          (error: HttpErrorResponse) => {
            console.log(error);
            this.alertService.error('Failed to reject request (' + error.status + ' - ' + error.statusText + ')'); // TODO Remove status code
          });
        break;
    }
  }
}

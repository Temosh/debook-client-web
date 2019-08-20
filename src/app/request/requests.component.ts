import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AlertService, PersonService, RequestService} from '../_services';
import {CONNECTION_REQUEST, DEBT_REQUEST} from '../_models';

@Component({
  moduleId: module.id,
  templateUrl: 'requests.component.html',
})

export class RequestsComponent implements OnInit {
  readonly CONNECTION_REQUEST: string = CONNECTION_REQUEST;
  readonly DEBT_REQUEST: string = DEBT_REQUEST;

  constructor(
    private router: Router,
    private alertService: AlertService,
    private requestService: RequestService,
    private personService: PersonService
  ) {
  }

  ngOnInit(): void {
  }
}

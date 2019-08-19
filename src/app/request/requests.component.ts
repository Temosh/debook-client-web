import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AlertService} from '../_services';

@Component({
  moduleId: module.id,
  templateUrl: 'requests.component.html'
})

export class RequestsComponent implements OnInit {

  constructor(
    private router: Router,
    private alertService: AlertService,
  ) {
  }

  ngOnInit(): void {
  }
}

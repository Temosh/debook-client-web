import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AlertService} from '../_services';

@Component({
  moduleId: module.id,
  templateUrl: 'profile.component.html'
})

export class ProfileComponent implements OnInit {

  constructor(
    private router: Router,
    private alertService: AlertService,
  ) {
  }

  ngOnInit(): void {
  }
}

import { Component, OnInit } from '@angular/core';

import { UserService } from '../_services/index';

@Component({
  moduleId: module.id,
  templateUrl: './main.component.html'
})

export class MainComponent implements OnInit {
  currentUser: string;

  constructor(private userService: UserService) {
    this.currentUser = localStorage.getItem('currentUser');
  }

  ngOnInit() {
  }
}

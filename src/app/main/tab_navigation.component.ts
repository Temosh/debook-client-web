import {Component, OnInit} from '@angular/core';
import {PersonService} from '../_services';

@Component({
  moduleId: module.id,
  templateUrl: './tab_navigation.component.html',
})
export class TabNavigationComponent implements OnInit {
  currentUser: string;

  constructor() {
    this.currentUser = localStorage.getItem('currentUser'); // TODO
  }

  ngOnInit() {
  }
}

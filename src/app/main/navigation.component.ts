import {Component, OnInit} from '@angular/core';

@Component({
  moduleId: module.id,
  templateUrl: './navigation.component.html',
})
export class NavigationComponent implements OnInit {
  currentUser: string;

  constructor() {
    this.currentUser = localStorage.getItem('currentUser'); // TODO
  }

  ngOnInit() {
  }
}

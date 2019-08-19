import {Component, OnInit} from '@angular/core';

@Component({
  moduleId: module.id,
  templateUrl: './main.component.html'
})

export class MainComponent implements OnInit {
  currentUser: string;

  constructor() {
    this.currentUser = localStorage.getItem('currentUser'); // TODO
  }

  ngOnInit() {
  }
}

import {Component, OnInit} from '@angular/core';
import {PersonService, UserService} from '../_services';
import {Person} from '../_models/person';
import {Router} from '@angular/router';

@Component({
  moduleId: module.id,
  templateUrl: './main.component.html'
})

export class MainComponent implements OnInit {
  currentUser: string;
  persons: Person[] = [];

  constructor(
    private router: Router,
    private userService: UserService,
    private personService: PersonService
  ) {
    this.currentUser = localStorage.getItem('currentUser');
  }

  ngOnInit() {
    this.loadAllLocalDebts();
  }

  private loadAllLocalDebts() {
    this.personService.getAll()
      .subscribe(
        (persons: Person[]) => this.persons = persons
      );
  }

  public btnNewPerson() {
    this.router.navigate(['/person/new']);
  }

  public btnNewDebt() {

  }

  public btnEditDebt() {

  }
}

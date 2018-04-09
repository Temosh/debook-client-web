import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {AlertService, PersonService} from '../_services';
import {Person} from '../_models/person';

@Component({
  moduleId: module.id,
  templateUrl: 'person_create.component.html'
})

export class PersonCreateComponent implements OnInit {
  person: Person = new Person();
  loading = false;
  returnUrl: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alertService: AlertService,
    private personService: PersonService
  ) { }

  ngOnInit() {
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  createPerson() {
    this.loading = true;
    this.personService.create(this.person)
      .subscribe(
        data => {
          this.router.navigate([this.returnUrl]);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });
  }
}

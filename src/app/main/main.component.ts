import {Component, OnInit} from '@angular/core';
import {CurrencyService, PersonService, RequestService} from '../_services';

@Component({
  moduleId: module.id,
  templateUrl: './main.component.html',
  providers: [PersonService, CurrencyService, RequestService]
})
export class MainComponent implements OnInit {

  constructor(
    private personService: PersonService,
    private currencyService: CurrencyService
  ) {
  }

  ngOnInit(): void {
    this.personService.init();
    this.currencyService.init();
  }
}

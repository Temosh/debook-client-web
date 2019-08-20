import {Component} from '@angular/core';
import {Event, NavigationEnd, Router} from '@angular/router';

declare var $: any;

@Component({
  moduleId: module.id,
  selector: 'app-navigation-bar',
  templateUrl: 'navigation-bar.component.html'
})

export class NavigationBarComponent {

  private readonly PEOPLE_TAB = {
    url: '/',
    button: 'peopleTabButton'
  };

  private readonly REQUESTS_TAB = {
    url: '/requests',
    button: 'requestsTabButton'
  };

  private readonly PROFILE_TAB = {
    url: '/profile',
    button: 'profileTabButton'
  };

  readonly tabs = [this.PEOPLE_TAB, this.REQUESTS_TAB, this.PROFILE_TAB];

  constructor(private router: Router) {
    this.router.events
      .subscribe((event: Event) => {
        if (event instanceof NavigationEnd) {
          this.tabs.forEach(tab => {
            if (tab.url === event.urlAfterRedirects) {
              const buttonTag = '#' + tab.button;
              $(buttonTag).button('toggle');
              return;
            }
          });
        }
      });
  }
}

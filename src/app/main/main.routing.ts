import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './main.component';
import {AuthGuard} from '../_guards';
import {PeopleComponent} from '../people/people.component';
import {RequestsComponent} from '../request/requests.component';
import {ProfileComponent} from '../profile/profile.component';
import {PersonCreateComponent} from '../person/person_create.component';
import {NgModule} from '@angular/core';
import {TabNavigationComponent} from './tab_navigation.component';

const mainRoutes: Routes = [
  {
    path: '',
    component: MainComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: TabNavigationComponent,
        children: [
          {path: '', component: PeopleComponent},
          {path: 'requests', component: RequestsComponent},
          {path: 'profile', component: ProfileComponent},
        ]
      },
      {path: 'person/new', component: PersonCreateComponent, canActivate: [AuthGuard]},
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(mainRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class MainRoutingModule {
}

import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from '../_guards';
import {PeopleComponent} from '../people';
import {RequestsComponent} from '../request';
import {ProfileComponent} from '../profile';
import {PersonCreateComponent} from '../people';
import {NgModule} from '@angular/core';
import {MainComponent} from './main.component';
import {NavigationComponent} from './navigation.component';

const mainRoutes: Routes = [
  {
    path: '',
    component: MainComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: NavigationComponent,
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

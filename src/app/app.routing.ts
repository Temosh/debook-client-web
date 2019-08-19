import {Routes, RouterModule} from '@angular/router';

import {MainComponent} from './main/main.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {AuthGuard} from './_guards';
import {PersonCreateComponent} from './person/person_create.component';
import {NgModule} from '@angular/core';
import {PeopleComponent} from './people/people.component';
import {RequestsComponent} from './request/requests.component';
import {ProfileComponent} from './profile/profile.component';

const appRoutes: Routes = [
  {
    path: '',
    component: MainComponent,
    canActivate: [AuthGuard],
    children: [
      {path: '', component: PeopleComponent},
      {path: 'requests', component: RequestsComponent},
      {path: 'profile', component: ProfileComponent},
    ]
  },
  {path: 'person/new', component: PersonCreateComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},

  // otherwise redirect to home
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true } // Debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}

import {NgModule} from '@angular/core';
import {PeopleComponent} from '../people/people.component';
import {PersonCreateComponent} from '../person/person_create.component';
import {DebtNewComponent} from '../debt/debt_new.component';
import {DebtEditComponent} from '../debt/debt_edit.component';
import {NewConnectionRequestComponent} from '../request/new_connection_request.component';
import {RequestsComponent} from '../request/requests.component';
import {ProfileComponent} from '../profile/profile.component';
import {NavigationBarComponent} from '../_directives';
import {MainRoutingModule} from './main.routing';
import {DebtService, RequestService, UserService} from '../_services';
import {CommonModule} from '@angular/common';
import {MainComponent} from './main.component';
import {FormsModule} from '@angular/forms';
import {TabNavigationComponent} from './tab_navigation.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MainRoutingModule
  ],
  declarations: [
    MainComponent,
    NavigationBarComponent,
    TabNavigationComponent,
    PeopleComponent,
    RequestsComponent,
    ProfileComponent,
    PersonCreateComponent,
    DebtNewComponent,
    DebtEditComponent,
    NewConnectionRequestComponent
  ],
  providers: [
    UserService,
    DebtService
  ]
})
export class MainModule { }

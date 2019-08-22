import {NgModule} from '@angular/core';
import {PeopleComponent, PersonCreateComponent} from '../people';
import {DebtEditModalComponent, DebtNewModalComponent} from '../debt';
import {EditRequestModalComponent, NewConnectionRequestModalComponent, NewDebtRequestModalComponent, RequestsComponent} from '../request';
import {ProfileComponent} from '../profile';
import {NavigationBarComponent} from '../_directives';
import {MainRoutingModule} from './main.routing';
import {DebtService, UserService} from '../_services';
import {CommonModule} from '@angular/common';
import {MainComponent} from './main.component';
import {FormsModule} from '@angular/forms';
import {NavigationComponent} from './navigation.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MainRoutingModule
  ],
  declarations: [
    MainComponent,
    NavigationBarComponent,
    NavigationComponent,
    PeopleComponent,
    RequestsComponent,
    ProfileComponent,
    PersonCreateComponent,
    DebtNewModalComponent,
    DebtEditModalComponent,
    NewConnectionRequestModalComponent,
    NewDebtRequestModalComponent,
    EditRequestModalComponent
  ],
  providers: [
    UserService,
    DebtService
  ]
})
export class MainModule { }

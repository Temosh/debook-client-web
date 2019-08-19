import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpClientModule, HttpClientXsrfModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app.routing';

import {AlertComponent, NavigationBarComponent} from './_directives';
import {AuthGuard} from './_guards';
import {AlertService, AuthenticationService, DebtService, PersonService, RequestService, UserService} from './_services';
import {MainComponent} from './main/main.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {PersonCreateComponent} from './person/person_create.component';
import {DebtNewComponent} from './debt/debt_new.component';
import {DebtEditComponent} from './debt/debt_edit.component';
import {NewConnectionRequestComponent} from './request/new_connection_request.component';
import {CurrencyService} from './_services/currency.service';
import {ProfileComponent} from './profile/profile.component';
import {RequestsComponent} from './request/requests.component';
import {PeopleComponent} from './people/people.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientXsrfModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    AlertComponent,
    MainComponent,
    LoginComponent,
    RegisterComponent,
    PeopleComponent,
    PersonCreateComponent,
    DebtNewComponent,
    DebtEditComponent,
    NewConnectionRequestComponent,
    RequestsComponent,
    ProfileComponent,
    NavigationBarComponent
  ],
  providers: [
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,
    PersonService,
    DebtService,
    CurrencyService,
    RequestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

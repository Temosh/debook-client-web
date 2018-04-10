import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpClientModule, HttpClientXsrfModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {routing} from './app.routing';

import {AlertComponent} from './_directives/index';
import {AuthGuard} from './_guards/index';
import {AlertService, AuthenticationService, DebtService, PersonService, UserService} from './_services/index';
import {MainComponent} from './main/main.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {PersonCreateComponent} from './person/person_create.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientXsrfModule,
    NgbModule.forRoot(),
    routing
  ],
  declarations: [
    AppComponent,
    AlertComponent,
    MainComponent,
    LoginComponent,
    RegisterComponent,
    PersonCreateComponent
  ],
  providers: [
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,
    PersonService,
    DebtService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

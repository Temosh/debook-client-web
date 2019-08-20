import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpClientModule, HttpClientXsrfModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app.routing';

import {AlertComponent} from './_directives';
import {AuthGuard} from './_guards';
import {AlertService, AuthenticationService} from './_services';
import {RegisterComponent, LoginComponent} from './authentication';
import {MainModule} from './main';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientXsrfModule,
    MainModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    AlertComponent,
    LoginComponent,
    RegisterComponent
  ],
  providers: [
    AuthGuard,
    AlertService,
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

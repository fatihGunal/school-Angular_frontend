import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login/login.component';
import {RegisterComponent} from './login/register/register.component';
import {LoginModule} from './login/login.module';
import {FormsModule} from '@angular/forms';
import {GebruikerService} from './services/gebruiker.service';
import {AuthenticateService} from './services/authenticate.service'


const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true })
  ],
  providers: [
    GebruikerService,
    AuthenticateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

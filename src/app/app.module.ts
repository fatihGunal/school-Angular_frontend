import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login/login.component';
import {RegisterComponent} from './login/register/register.component';
import {LoginModule} from './login/login.module';
import {FormsModule} from '@angular/forms';
import {GebruikerService} from './services/gebruiker.service';
import {AuthenticateService} from './services/authenticate.service';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { SecurityInterceptor } from './security/security.interceptor';
import {HomeComponent} from './home/home/home.component';
import {HomeModule} from './home/home.module';
import {AuthGuard} from './security/guards/auth.guard';

import { registerLocaleData } from '@angular/common';
import localeBE from '@angular/common/locales/be';
import {PollService} from './services/poll.service';
import {PollOverzichtComponent} from './home/home/poll-overzichten/poll-overzicht/poll-overzicht.component';
import {PollOverzichtenComponent} from './home/home/poll-overzichten/poll-overzichten.component';
import {PollAanmaakComponent} from './home/home/poll-aanmaak/poll-aanmaak.component';
import {PollModule} from './poll/poll.module';
import {PollComponent} from './poll/poll/poll.component';


registerLocaleData(localeBE, 'be');


const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home/:id', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'poll/:id', component: PollComponent }
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
    HttpClientModule,
    HomeModule,
    PollModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true })
  ],
  providers: [
    GebruikerService,
    PollService,
    PollOverzichtComponent,
    PollOverzichtenComponent,
    PollAanmaakComponent,
    AuthenticateService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SecurityInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

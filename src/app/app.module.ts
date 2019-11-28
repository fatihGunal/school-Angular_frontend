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


const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home/:id', component: HomeComponent, canActivate: [AuthGuard] }
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
    RouterModule.forRoot(appRoutes, {enableTracing: true })
  ],
  providers: [
    GebruikerService,
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

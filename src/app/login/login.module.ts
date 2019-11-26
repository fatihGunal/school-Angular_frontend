import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {GebruikerService} from '../services/gebruiker.service';
import {Observable} from 'rxjs';
import {Gebruiker} from '../models/gebruiker.model';

@NgModule({
  declarations: [RegisterComponent, LoginComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers: [
    GebruikerService
  ],
  exports: [RegisterComponent, LoginComponent]
})
export class LoginModule {

  constructor() { }
}

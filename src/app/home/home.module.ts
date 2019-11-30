import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './home/header/header.component';
import { PollAanmaakComponent } from './home/poll-aanmaak/poll-aanmaak.component';
import {ReactiveFormsModule} from '@angular/forms';
import { PollOverzichtenComponent } from './home/poll-overzichten/poll-overzichten.component';
import { PollOverzichtComponent } from './home/poll-overzichten/poll-overzicht/poll-overzicht.component';
import {GebruikerService} from '../services/gebruiker.service';
import {PollService} from '../services/poll.service';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [HomeComponent, HeaderComponent, PollAanmaakComponent, PollOverzichtenComponent, PollOverzichtComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [
    GebruikerService,
    PollService
  ],
  exports: [HomeComponent, HeaderComponent, PollAanmaakComponent, PollOverzichtenComponent, PollOverzichtComponent],
})
export class HomeModule { }

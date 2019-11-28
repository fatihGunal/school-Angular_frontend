import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './home/header/header.component';
import { PollAanmaakComponent } from './home/poll-aanmaak/poll-aanmaak.component';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [HomeComponent, HeaderComponent, PollAanmaakComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [HomeComponent, HeaderComponent, PollAanmaakComponent]
})
export class HomeModule { }

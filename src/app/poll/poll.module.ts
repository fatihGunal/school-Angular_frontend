import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PollComponent } from './poll/poll.component';
import {MAT_RADIO_DEFAULT_OPTIONS, MatRadioModule} from '@angular/material/';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [PollComponent],
  imports: [
    CommonModule,
    MatRadioModule,
    ReactiveFormsModule
  ],
  providers: [{
    provide: MAT_RADIO_DEFAULT_OPTIONS,
    useValue: { color: 'accent' },
  }]
})
export class PollModule { }

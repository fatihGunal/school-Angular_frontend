import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Poll} from '../../../models/poll.model';
import {PollService} from '../../../services/poll.service';
import {first} from 'rxjs/operators';
import {PollAanmaakComponent} from '../poll-aanmaak/poll-aanmaak.component';

@Component({
  selector: 'app-poll-overzichten',
  templateUrl: './poll-overzichten.component.html',
  styleUrls: ['./poll-overzichten.component.scss']
})
export class PollOverzichtenComponent implements OnInit {

  @Input() gebruikersid: number;
  polls: Poll[];

  constructor(private pollService: PollService, private pollAanmaakComponent: PollAanmaakComponent) {
    this.pollAanmaakComponent.refreshMijnPoll.subscribe(result => {
      if (result) {
        console.log('submit is pressed in behavoir subject');
      }
    });
  }

  ngOnInit() {
    // this.getPollsWhereGebruikerID();
    this.polls = this.pollService.polls;
  }

  // getPollsWhereGebruikerID() {
  //   this.pollService.getPollsWhereGebruikerID(this.gebruikersid)
  //     .pipe()
  //     .subscribe(result => {
  //       console.log('changes');
  //       this.polls = result;
  //     });
  // }
}

import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PollService} from '../../services/poll.service';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.scss']
})
export class PollComponent implements OnInit {

  gekozenPollID: number;


  constructor(private route: ActivatedRoute, private pollService: PollService) {
    this.route.params.subscribe( params => {
      this.gekozenPollID = params.id;
    });
  }

  ngOnInit() {
    this.getPollWithAntwoorden();
  }

  getPollWithAntwoorden() {
    console.log('JOW');
    this.pollService.getPollWithAntwoorden(this.gekozenPollID)
      .subscribe(result => {
        console.log('HEY');
        console.log(result + ' === POLL');
      });
  }

}

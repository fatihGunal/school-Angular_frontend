import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PollService} from '../../services/poll.service';
import {StemService} from '../../services/stem.service';
import {Poll} from '../../models/poll.model';
import {Antwoord} from '../../models/antwoord.model';
import {AntwoordService} from '../../services/antwoord.service';

@Component({
  selector: 'app-pollstanden',
  templateUrl: './pollstanden.component.html',
  styleUrls: ['./pollstanden.component.scss']
})
export class PollstandenComponent implements OnInit {

  gekozenPollID: number;
  poll: Poll;
  allAntwoordenWithStemmenByPollID: Antwoord[];

  counter: number = 1;
  antwoordCounter: number = 0;

  constructor(private router: Router, private route: ActivatedRoute, private pollService: PollService, private stemService: StemService, private antwoordService: AntwoordService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.gekozenPollID = params.id;
    });
    this.getPollWithAntwoorden();
    this.getAntwoordenWithStemmenByPollID();
    this.getAllAntwoordenWithStemmenByPollID();
  }

  getAntwoordenWithStemmenByPollID() {
    this.antwoordService.getAntwoordenWithStemmenByPollID(this.gekozenPollID).subscribe(result =>
      console.log('succes opgehaald getAntwoordenWithStemmen()') + JSON.stringify(result)
    );
  }

  getAllAntwoordenWithStemmenByPollID() {
    this.antwoordService.getAntwoordenWithStemmenByPollID(this.gekozenPollID)
      .subscribe(result => {
        this.allAntwoordenWithStemmenByPollID = result;

        // hierna is het om de stemmen te tellen van elk antwoord per poll
        for (const antwoord of result) {
          // console.log(antwoord);
          if (antwoord.stemmen.length) {
            for (const stem of antwoord.stemmen) {
              if (antwoord.antwoordID == stem.antwoordID) {
                if (stem.pollID == this.gekozenPollID) {
                  this['count' + this.antwoordCounter] = this.counter;
                } else {
                  this['count' + this.antwoordCounter] = 0;
                }
              }
              this.counter++;
            }
          } else {
            this['count' + this.antwoordCounter] = 0;
          }
          // console.log(antwoord.antwoordID + ' ' + this['count' + this.antwoordCounter]);
          this.counter = 1;
          this.antwoordCounter++;
        }
      });
  }

  getPollWithAntwoorden() {
    console.log('JOW');
    this.pollService.getPollWithAntwoorden(this.gekozenPollID)
      .subscribe(result => {
        this.poll = result;
      });
  }
  gaTerug() {
    this.router.navigate(['home/' + this.poll.gebruikerID]);
  }
}

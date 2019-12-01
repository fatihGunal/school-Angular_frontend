import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PollService} from '../../services/poll.service';
import {first} from 'rxjs/operators';
import {Poll} from '../../models/poll.model';
import {StemService} from '../../services/stem.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.scss']
})
export class PollComponent implements OnInit {

  gekozenPollID: number;
  poll: Poll;


  maakStemForm = new FormGroup({
    AntwoordID: new FormControl('', Validators.required),
    GebruikerID: new FormControl('', Validators.required),
    pollID: new FormControl('', Validators.required)
  });


  constructor(private router: Router, private route: ActivatedRoute, private pollService: PollService, private stemService: StemService) {
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
        this.poll = result;
      });
  }

  onSubmit() {
    this.maakStemForm.controls.GebruikerID.setValue(this.poll.gebruikerID);
    this.maakStemForm.controls.pollID.setValue(this.poll.pollID);

    console.log(this.maakStemForm.value);

    this.stemService.addStem(this.maakStemForm.value).subscribe(result => {
      console.log('stem lukt');
      if (result.gebruikerID) {
        this.router.navigate(['home/' + result.gebruikerID]);
      }

    });

  }

}

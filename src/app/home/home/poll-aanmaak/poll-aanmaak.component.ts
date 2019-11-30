import {Component, Input, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {catchError, first, map} from 'rxjs/operators';
import {PollService} from '../../../services/poll.service';
import {Router} from '@angular/router';
import {Poll} from '../../../models/poll.model';
import {Antwoord} from '../../../models/antwoord.model';
import {DatePipe, formatDate} from '@angular/common';
import DateTimeFormat = Intl.DateTimeFormat;
import {Gebruiker} from '../../../models/gebruiker.model';
import {toNumbers} from '@angular/compiler-cli/src/diagnostics/typescript_version';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-poll-aanmaak',
  templateUrl: './poll-aanmaak.component.html',
  styleUrls: ['./poll-aanmaak.component.scss']
})
export class PollAanmaakComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private pollService: PollService, private router: Router) { }

  // om de gebruiker te kennen, we halen dit info uit ons parent component
  // we schrijven gebruikersid later weg in poll table
  @Input() gebruikersid: number;

  refreshMijnPoll = new BehaviorSubject(false);

  // we schrijven ook datum en uur weg wanneer we poll aanmaken
  // de volgende 3 lijnen code zorgt ervoor dat we oorspronkelijke datum nemen en
  // dit wegschrijven in een formaat die ons database accepteert
  pipe = new DatePipe('en-US');
  nu = Date.now();
  aanmaakDatum = this.pipe.transform(this.nu, 'short');

  // lijst met antwoorden die men invoegt bij aanmaken van poll
  antwoorden: FormArray;

  // pollID die we normaal gezien terug moeten krijgen na we die toevoegen in database
  // maar we krijgen die niet. is een probleem die ik niet kon oplossen.
  returnPoll: number;


  // poll aanmaak formulier
  maakPollForm = new FormGroup({
    titel: new FormControl('', Validators.required),
    beschrijving: new FormControl('', Validators.required),
    aanmaakDatum: new FormControl(this.aanmaakDatum, Validators.required),
    gebruikerID: new FormControl('', Validators.required),
    antwoorden: this.formBuilder.array([ this.createItem() ])
  });

  ngOnInit() {
  }

  // maakt een antwoord formgour die we later als lijst in
  // formulier 'maakPollForm' gaan steken bij antwoorden
  createItem(): FormGroup {
    return this.formBuilder.group({
      antwoordPoll: new FormControl('', Validators.required),
      PollID: new FormControl(5, Validators.required)
    });
  }

  // dit zorgt ervoor dat we een antwoord input veld toevoegen als
  // we er nog eentje nodig hebben
  addItem(): void {
    this.antwoorden = this.maakPollForm.get('antwoorden') as FormArray;
    this.antwoorden.push(this.createItem());
  }

  // dit zorgt ervoor dat we een antwoord input veld terug verwijderen als
  // we die niet nodig hebben
  deleteItem(): void {
    this.antwoorden = this.maakPollForm.get('antwoorden') as FormArray;
    this.antwoorden.removeAt(this.antwoorden.length - 1);
  }

  // wordt getriggered wanneer we op submit drukken bij aanmaak poll
  onSubmit() {
    console.log(this.gebruikersid);
    this.maakPollForm.controls.gebruikerID.setValue(this.gebruikersid);

    // behavoirsubject true maken als er wordt gesubmit
    this.refreshMijnPoll.next(true);
    // API call
    console.log(this.maakPollForm.value);

    this.pollService.addPoll(this.maakPollForm.value)
      .pipe(first())
      .subscribe( result => {
        this.returnPoll = result.pollID;
        console.log( result + 'zit erin');
      });
  }
}

import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {first} from 'rxjs/operators';
import {PollService} from '../../../services/poll.service';
import {Router} from '@angular/router';
import {Poll} from '../../../models/poll.model';
import {Antwoord} from '../../../models/antwoord.model';

@Component({
  selector: 'app-poll-aanmaak',
  templateUrl: './poll-aanmaak.component.html',
  styleUrls: ['./poll-aanmaak.component.scss']
})
export class PollAanmaakComponent implements OnInit {
  submitted: boolean;

  antwoord: Antwoord;

  antwoorden: FormArray;
  // maakPollAntwoordForm: FormGroup;


  maakPollForm = new FormGroup({
    titel: new FormControl('', Validators.required),
    beschrijving: new FormControl('', Validators.required),
    antwoorden: this.formBuilder.array([ this.createItem() ])
  });

  // maakPollAntwoordForm = new FormGroup({
  //   antwoorden: this.formBuilder.array([this.createItem()])
  // });

  constructor(private formBuilder: FormBuilder, private pollService: PollService, private router: Router) { }

  ngOnInit() {
  }

  createItem(): FormGroup {
    return this.formBuilder.group({
      antwoordPoll: new FormControl('', Validators.required),
      PollID: new FormControl(5, Validators.required)
    });
  }

  addItem(): void {
    this.antwoorden = this.maakPollForm.get('antwoorden') as FormArray;
    this.antwoorden.push(this.createItem());
  }

  deleteItem(): void {
    this.antwoorden = this.maakPollForm.get('antwoorden') as FormArray;
    this.antwoorden.removeAt(this.antwoorden.length - 1);
  }

  onSubmit() {
    this.submitted = true;
    // API call
    console.log('submitted !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
    console.log(this.maakPollForm.value);

    this.pollService.addPoll(this.maakPollForm.value)
      .subscribe(
        data => {
          console.log('registration succesful' + data);
          // this.router.navigate(['']);
        },
        error => {
          console.log('Error addPoll in');
        });
  }
}

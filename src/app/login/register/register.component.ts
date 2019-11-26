import { Component, OnInit } from '@angular/core';
import { Gebruiker } from '../../models/gebruiker.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  gebruiker: Gebruiker = new Gebruiker(1, 'fatih@mail.be', 'muhammed', 'paswoord');
  submitted: boolean = false;
  constructor() { }

  ngOnInit() {
  }
  onSubmit() {
    this.submitted = true;
  }
}

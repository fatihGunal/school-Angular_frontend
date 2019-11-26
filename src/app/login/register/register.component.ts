import { Component, OnInit } from '@angular/core';
import { Gebruiker } from '../../models/gebruiker.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  gebruiker = new Gebruiker();
  submitted: boolean = false;
  constructor() { }

  ngOnInit() {
  }
  onSubmit() {
    this.submitted = true;
    // API call
  }
}

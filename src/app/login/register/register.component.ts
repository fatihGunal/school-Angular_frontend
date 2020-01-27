import { Component, OnInit } from '@angular/core';
import { Gebruiker } from '../../models/gebruiker.model';
import {GebruikerService} from '../../services/gebruiker.service';
import {first} from 'rxjs/operators';
import {Router} from '@angular/router';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import validate = WebAssembly.validate;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  submitted: boolean = false;

  registerForm = new FormGroup({
    email: new FormControl('', Validators.required),
    gebruikersnaam: new FormControl('', Validators.required),
    wachtwoord: new FormControl('', [Validators.required, Validators.minLength(3)])
  });


  constructor(private gebruikerService: GebruikerService, private router: Router) { }

  ngOnInit() {
  }
  onSubmit() {
    this.submitted = true;
    // API call
    const id = this.gebruikerService.registreerGebruiker(this.registerForm.value)
      .pipe(first())
      .subscribe(data => {
        console.log(data + 'registreren');
      });
    this.router.navigate(['']);
    console.log(id);
  }
}

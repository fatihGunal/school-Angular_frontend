import {Component, OnInit, Output} from '@angular/core';
import {AuthenticateService} from '../../services/authenticate.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Gebruiker} from '../../models/gebruiker.model';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  submitted: boolean = false;

  loginForm = new FormGroup({
    gebruikersnaam: new FormControl('', Validators.required),
    wachtwoord: new FormControl('', [Validators.required, Validators.minLength(3)])
  });

  constructor(private authenticateService: AuthenticateService, private router: Router) {
  }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
    // API call
    this.authenticateService.authenticate(this.loginForm.value).subscribe(result => {
      this.authenticateService.isLoggedin.next(result.token ? true : false);
      localStorage.setItem('token', result.token);
      console.log(result + 'Persoon');
      this.router.navigate(['home/' + result.gebruikerID]);
    });
  }
}

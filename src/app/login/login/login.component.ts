import {Component, OnInit} from '@angular/core';
import {AuthenticateService} from '../../services/authenticate.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

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

  constructor(private authenticateService: AuthenticateService) {
  }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
    // API call
    this.authenticateService.authenticate(this.loginForm.value).subscribe(result => {
      localStorage.setItem('token', result.token);
    });
  }

}

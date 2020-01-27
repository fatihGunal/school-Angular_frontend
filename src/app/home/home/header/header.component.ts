import {Component, Input, OnInit} from '@angular/core';
import {Gebruiker} from '../../../models/gebruiker.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() gebruiker: Gebruiker;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  logUit() {
    localStorage.removeItem('token');
    this.router.navigate(['']);
  }
}

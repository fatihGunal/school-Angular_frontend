import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Gebruiker} from '../../models/gebruiker.model';
import {GebruikerService} from '../../services/gebruiker.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  gebruikers: Observable<Gebruiker[]>;

  constructor(private gebruikerService: GebruikerService) {
    this.gebruikers = this.gebruikerService.getGebruikers();
  }

  ngOnInit() {
  }

}

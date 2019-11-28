import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Gebruiker} from '../../models/gebruiker.model';
import {GebruikerService} from '../../services/gebruiker.service';
import {ActivatedRoute, Router} from '@angular/router';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  gelogdGebruikerID: number;
  gebruiker: Gebruiker;

  constructor(private gebruikerService: GebruikerService, private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe( params => {
      console.log(params.id);
      this.gelogdGebruikerID = params.id;
    });
    this.gebruikerService.getGebruiker(this.gelogdGebruikerID)
      .subscribe( data => {
        this.gebruiker = data;
      });
    console.log(this.gebruiker);
  }

  ngOnInit() {
  }

}

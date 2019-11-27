import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Gebruiker} from '../models/gebruiker.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GebruikerService {

  constructor(private http: HttpClient) { }

  getGebruikers(): Observable<Gebruiker[]> {
    return this.http.get<Gebruiker[]>('https://localhost:44329/api/Gebruiker', {
      // headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    });
  }

  registreerGebruiker(gebruiker: Gebruiker) {
    return this.http.post<Gebruiker>('https://localhost:44329/api/Gebruiker', gebruiker);
  }
}

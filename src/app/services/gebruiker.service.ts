import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Gebruiker} from '../models/gebruiker.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GebruikerService {

  constructor(private http: HttpClient) { }

  getGebruikers(): Observable<Gebruiker[]> {
    return null;
  }

  addGebruiker(gebruiker: Gebruiker) {
    return this.http.post<Gebruiker>("https://localhost:5001/api/member", member);
  }
}

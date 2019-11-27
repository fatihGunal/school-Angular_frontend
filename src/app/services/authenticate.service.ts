import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Gebruiker} from '../models/gebruiker.model';
import {Userlogin} from '../models/userlogin.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(private httpClient: HttpClient) { }
  authenticate(userLogin: Userlogin): Observable<Gebruiker> {
    return this.httpClient.post<Gebruiker>('https://localhost:44329/api/Gebruiker/authenticate', userLogin);
  }
}

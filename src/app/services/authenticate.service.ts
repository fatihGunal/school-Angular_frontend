import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Gebruiker} from '../models/gebruiker.model';
import {userlogin} from '../models/userlogin.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  // tslint:disable-next-line:variable-name
  constructor(private _httpClient: HttpClient) { }
  authenticate(userLogin: userlogin): Observable<Gebruiker> {
    return this._httpClient.post<Gebruiker>('https://localhost:44329/api/Gebruiker/authenticate', userLogin);
  }
}

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Stem} from '../models/stem.model';
import {Observable} from 'rxjs';
import {Antwoord} from '../models/antwoord.model';

@Injectable({
  providedIn: 'root'
})
export class AntwoordService {

  constructor(private http: HttpClient) { }

  getAntwoordenWithStemmenByPollID(pollID: number): Observable<Antwoord[]> {
    return this.http.get<Antwoord[]>('https://localhost:44329/api/Antwoord/getAntwoordenWithStemmen/' + pollID);
  }

  getAllAntwoordenWithStemmenByPollID(): Observable<Antwoord[]> {
    return this.http.get<Antwoord[]>('https://localhost:44329/api/Antwoord/getAllAntwoordenWithStemmenByPollID');
  }
}

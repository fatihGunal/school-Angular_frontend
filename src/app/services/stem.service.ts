import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Poll} from '../models/poll.model';
import {Stem} from '../models/stem.model';

@Injectable({
  providedIn: 'root'
})
export class StemService {

  constructor(private http: HttpClient) { }

  addStem(stem: Stem) {
    return this.http.post<Stem>('https://localhost:44329/api/stem', stem);
  }

  getAllStemWithAntwoordWithPoll(): Observable<Stem[]> {
    return this.http.get<Stem[]>('https://localhost:44329/api/stem/getAllStemWithAntwoordWithPoll');
  }
  getAllStemWithAntwoordWithPollByGebruiker(id: number): Observable<Stem[]> {
    return this.http.get<Stem[]>('https://localhost:44329/api/stem/getAllStemWithAntwoordWithPollByGebruiker/' + id);
  }
}

import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Poll} from '../models/poll.model';
import {Observable, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PollService {

  polls: Poll[] = [];

  constructor(private http: HttpClient) { }


  getPollWithAntwoorden(pollID: number): Observable<Poll> {
    return this.http.get<Poll>('https://localhost:44329/api/Poll/getPollWithAntwoorden/' + pollID);
  }

  addPoll(poll: Poll) {
    this.polls.push(poll);
    return this.http.post<Poll>('https://localhost:44329/api/poll', poll);
  }
  getPollsWhereGebruikerID(gebruikerID: number): Observable<Poll[]> {
    return this.http.get<Poll[]>('https://localhost:44329/api/Poll/GetPollWhereGebruikerID/' + gebruikerID);
  }
}

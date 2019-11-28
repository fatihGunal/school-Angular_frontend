import { Injectable } from '@angular/core';
import {Gebruiker} from '../models/gebruiker.model';
import {HttpClient} from '@angular/common/http';
import {Poll} from '../models/poll.model';

@Injectable({
  providedIn: 'root'
})
export class PollService {

  constructor(private http: HttpClient) { }

  addPoll(poll: Poll) {
    return this.http.post<Poll>('https://localhost:44329/api/Poll', poll);
  }
}

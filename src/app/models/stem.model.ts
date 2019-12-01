import {Gebruiker} from './gebruiker.model';
import {Antwoord} from './antwoord.model';
import {Poll} from './poll.model';

export class Stem {
  stemID: number;
  antwoordID: number;
  gebruikerID: number;
  pollID: number;

  gebruiker: Gebruiker;
  antwoord: Antwoord;
  poll: Poll;
}

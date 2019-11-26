import {Gebruiker} from './gebruiker.model';
import {Antwoord} from './antwoord.model';

export class Stem {
  stemID: number;
  antwoordID: number;
  gebruikerID: number;
  gebruiker: Gebruiker;
  antwoord: Antwoord;
}

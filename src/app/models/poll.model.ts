import {Pollgebruiker} from './pollgebruiker.model';
import {Antwoord} from './antwoord.model';

export class Poll {
  pollID: number;
  titel: string;
  beschrijving: string;
  pollgebruikers: Array<Pollgebruiker>;
  antwoorden: Array<Antwoord>;
}

import {Pollgebruiker} from './pollgebruiker.model';
import {Antwoord} from './antwoord.model';

export class Poll {
  pollID: number;
  titel: string;
  beschrijving: string;
  antwoorden: Array<Antwoord>;
  pollgebruikers: Array<Pollgebruiker>;

  //constructor(titel: string, beschrijving: string) {}
}

import {Pollgebruiker} from './pollgebruiker.model';
import {Antwoord} from './antwoord.model';
import DateTimeFormat = Intl.DateTimeFormat;
import {Gebruiker} from './gebruiker.model';
import {Stem} from './stem.model';

export class Poll {
  pollID: number;
  titel: string;
  beschrijving: string;
  aanmaakDatum: DateTimeFormat;
  gebruikerID: number;

  gebruiker: Gebruiker;
  antwoorden: Array<Antwoord>;
  stemmen: Array<Stem>
  pollgebruikers: Array<Pollgebruiker>;
}

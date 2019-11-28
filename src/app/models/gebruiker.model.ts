import {Vriendschap} from './vriendschap.model';
import {Stem} from './stem.model';
import {Pollgebruiker} from './pollgebruiker.model';

export class Gebruiker {
  gebruikerID: number;
  email: string;
  wachtwoord: string;
  gebruikersnaam: string;
  token: string;
  gebruikersEen: Array<Vriendschap>;
  gebruikersTwee: Array<Vriendschap>;
  stemmen: Array<Stem>;
  pollgebruikers: Array<Pollgebruiker>;




}

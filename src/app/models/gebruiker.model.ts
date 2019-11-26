import {Vriendschap} from './vriendschap.model';
import {Stem} from './stem.model';
import {Pollgebruiker} from './pollgebruiker.model';

export class Gebruiker {
  gebruikerID: number;
  email: string;
  wachtwoord: string;
  gebruikersnaam: string;
  gebruikerseen: Array<Vriendschap>;
  gebruikerstwee: Array<Vriendschap>;
  stemmen: Array<Stem>;
  pollgebruikers: Array<Pollgebruiker>;


  // constructor(public id: number,
  //             public email: string,
  //             public wachtwoord: string,
  //             public gebruikersnaam: string,
  //             public gebruikerseen: Array<Vriendschap>,
  //             public gebruikerstwee: Array<Vriendschap>,
  //             public stemmen: Array<Stem>,
  //             public pollgebruikers: Array<Pollgebruiker>) { }

}

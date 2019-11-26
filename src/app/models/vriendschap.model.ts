import {Gebruiker} from './gebruiker.model';

export class Vriendschap {
  vriendschapID: number;
  gebruikerEenID: number;
  gebruikerTweeID: number;
  status: number;
  gebruikerEen: Gebruiker;
  gebruikerTwee: Gebruiker;
}

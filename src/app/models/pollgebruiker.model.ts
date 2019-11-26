import {Gebruiker} from './gebruiker.model';
import {Poll} from './poll.model';

export class Pollgebruiker {
  pollgebruikerID: number;
  pollID: number;
  gebruikerID: number;
  gebruiker: Gebruiker;
  poll: Poll;
}

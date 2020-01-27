import {Poll} from './poll.model';
import {Stem} from './stem.model';

export class Antwoord {
  antwoordID: number;
  AntwoordPoll: string;
  pollID: number;
  poll: Poll;
  stemmen: Array<Stem>;
}


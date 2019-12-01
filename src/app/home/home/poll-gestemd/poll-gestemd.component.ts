import {Component, Input, OnInit} from '@angular/core';
import {StemService} from '../../../services/stem.service';
import {Stem} from '../../../models/stem.model';

@Component({
  selector: 'app-poll-gestemd',
  templateUrl: './poll-gestemd.component.html',
  styleUrls: ['./poll-gestemd.component.scss']
})
export class PollGestemdComponent implements OnInit {

  @Input() gebruikersid;
  mijnStemmen: Stem[];

  constructor(private stemService: StemService) { }

  ngOnInit() {
    this.getStemWithAntwoordWithPollByGebruiker();
  }

  getStemWithAntwoordWithPollByGebruiker() {
    this.stemService.getAllStemWithAntwoordWithPollByGebruiker(this.gebruikersid)
      .subscribe(result => {
        this.mijnStemmen = result;
        console.log(JSON.stringify(result) + 'geeft welke ant je hebt geste');
      });
  }
}

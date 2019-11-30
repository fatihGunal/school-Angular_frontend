import {Component, Input, OnInit} from '@angular/core';
import {Poll} from '../../../../models/poll.model';
import {Route, Router} from '@angular/router';

@Component({
  selector: 'app-poll-overzicht',
  templateUrl: './poll-overzicht.component.html',
  styleUrls: ['./poll-overzicht.component.scss']
})
export class PollOverzichtComponent implements OnInit {

  @Input() poll: Poll;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToPoll(id: number) {
    this.router.navigate(['poll/' + id]);
  }

}

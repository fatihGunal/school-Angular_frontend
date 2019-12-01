import {Component, Input, OnInit} from '@angular/core';
import {Stem} from '../../../../models/stem.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-poll-gestemd-child',
  templateUrl: './poll-gestemd-child.component.html',
  styleUrls: ['./poll-gestemd-child.component.scss']
})
export class PollGestemdChildComponent implements OnInit {


  @Input() stem: Stem;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToStand(id: number) {
    // id is pollID
    this.router.navigate(['pollstanden/' + id]);
  }
}

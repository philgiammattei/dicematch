import { Component, OnInit, Input } from '@angular/core';
import {Player} from '../player';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {
  @Input() players: Player[];

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit, Input, Output } from '@angular/core';
import { Hero } from '../hero';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hero-select',
  templateUrl: './hero-select.component.html',
  styleUrls: ['./hero-select.component.css']
})
export class HeroSelectComponent implements OnInit {

  @Input() heroes: Hero[];
  @Output() heroesEmit = new EventEmitter<Hero[]>();

  constructor() { }

  ngOnInit() {
  }

  toggleHero(hero: Hero) {
    hero.selected = !hero.selected;
    this.heroesEmit.emit(this.heroes);
  }

}

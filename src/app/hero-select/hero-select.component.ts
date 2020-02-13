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
  isHidden: boolean;


  constructor() {
    this.isHidden = true;
   }

  ngOnInit() {
  }

  toggleHero(hero: Hero) {
    hero.selected = !hero.selected;
  }

  toggleAll(select: boolean) {
    this.heroes.forEach(hero => hero.selected = select ? true : false);
    this.heroesEmit.emit(this.heroes);
  }

  //if not all season heroes are selected, select all in season
  //otherwise deselect all from season
  toggleSeason(season: number) {
    if (!this.heroes.filter(hero => hero.season === season)
      .every(hero => hero.selected)) {
      this.heroes.filter(hero => hero.season === season)
        .forEach(hero => hero.selected = true);
    } else {
      this.heroes.filter(hero => hero.season === season)
        .forEach(hero => hero.selected = false);
    }
    this.heroesEmit.emit(this.heroes);
  }
  toggleHidden(newHidden: boolean) {
    this.isHidden = newHidden;
  }

}

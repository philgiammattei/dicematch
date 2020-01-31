import { Component } from '@angular/core';
import { Hero } from '../app/hero';
import { Player } from './player';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dicematch';
  players: Player[] = [];
  heroes: Hero[] = [
    new Hero('Barbarian'),
    new Hero('Moon Elf'),
    new Hero('Monk'),
    new Hero('Pyromancer'),
    new Hero('Paladin'),
    new Hero('Shadow Thief'),
    new Hero('Samurai'),
    new Hero('Gunslinger'),
    new Hero('Cursed Pirate'),
    new Hero('Tactician'),
    new Hero('Huntress'),
    new Hero('Artificer'),
    new Hero('Vampire Lord'),
    new Hero('Seraph'),
  ];
  selectedHeroes: Hero[];
  tooManyPlayers = false;

  constructor() {
    this.selectedHeroes = this.heroes;
  }

  setPlayers(players: Player[]) {
    this.players = players;
    this.comparePlayersAndHeroes();
  }

  matchmake() {
    let heroPool: Hero[] = this.selectedHeroes;
    for (const player of this.players) {
      const index: number = Math.floor(Math.random() * heroPool.length);
      player.hero = heroPool[index].name;
      heroPool = heroPool.filter(hero => hero.name !== player.hero);
    }
  }

  setHeroes(heroes: Hero[]) {
    this.selectedHeroes = heroes.filter(hero => hero.selected);
    this.comparePlayersAndHeroes();
  }

  comparePlayersAndHeroes() {
    if (this.selectedHeroes.length < this.players.length) {
      this.tooManyPlayers = true;
    } else {
      this.tooManyPlayers = false;
    }
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {
    this.setPlayers([new Player('Player 1'), new Player('Player 2')]);
  }
}

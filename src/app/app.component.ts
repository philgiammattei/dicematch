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
    new Hero('Barbarian', 1),
    new Hero('Moon Elf', 1),
    new Hero('Monk', 1),
    new Hero('Pyromancer', 1),
    new Hero('Paladin', 1),
    new Hero('Shadow Thief', 1),
    new Hero('Samurai', 2),
    new Hero('Gunslinger', 2),
    new Hero('Cursed Pirate', 2),
    new Hero('Tactician', 2),
    new Hero('Huntress', 2),
    new Hero('Artificer', 2),
    new Hero('Vampire Lord', 2),
    new Hero('Seraph', 2),
  ];
  selectedHeroes: Hero[];
  tooManyPlayers = false;
  teamSize = 1;

  constructor() {
    this.selectedHeroes = this.heroes;
  }

  setPlayers(players: Player[]) {
    this.players = [];
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

  setTeamSize(size: number) {
    this.teamSize = size;
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {
    this.setPlayers([new Player('Player 1'), new Player('Player 2')]);
  }
}

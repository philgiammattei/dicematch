import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dicematch';
  classes = [
    'Barbarian',
    'Moon Elf',
    'Monk',
    'Pyromancer',
    'Paladin',
    'Shadow Thief',
    'Samurai',
    'Gunslinger',
    'Cursed Pirate',
    'Tactician',
    'Huntress',
    'Artificer',
    'Vampire Lord',
    'Seraph',
  ];
  player1 = '';
  player2 = '';

  matchmaker() {
    this.player1 = this.classes[Math.floor(Math.random() * this.classes.length)];
    this.classes = this.classes.filter(fighter => fighter !== this.player1);
    this.player2 = this.classes[Math.floor(Math.random() * this.classes.length)];
  }

  ngOnInit() {
    this.matchmaker();
  }
}

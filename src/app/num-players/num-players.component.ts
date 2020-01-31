import { Player } from './../player';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-num-players',
  templateUrl: './num-players.component.html',
  styleUrls: ['./num-players.component.css']
})
export class NumPlayersComponent implements OnInit {
  @Input() players: Player[];
  @Output() numPlayers = new EventEmitter<Player[]>();

  constructor() { }

  ngOnInit() {
  }

  addPlayer() {
    const newPlayerNumber: number = this.players.length + 1;
    if (newPlayerNumber <= 6) {
      this.players.push(new Player('Player ' + newPlayerNumber));
      this.numPlayers.emit(this.players);
    }
  }

  removePlayer() {
    if (this.players.length > 2) {
      this.players.pop();
      this.numPlayers.emit(this.players);
    }
  }

}

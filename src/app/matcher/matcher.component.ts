import { Component, OnInit, Output, Input } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-matcher',
  templateUrl: './matcher.component.html',
  styleUrls: ['./matcher.component.css']
})
export class MatcherComponent implements OnInit {
  @Output() matchEmit: EventEmitter<boolean> = new EventEmitter();
  @Input() tooManyPlayers: boolean;
  constructor() { }

  ngOnInit() {
  }

  buttonFire() {
    this.matchEmit.emit(true);
  }
}

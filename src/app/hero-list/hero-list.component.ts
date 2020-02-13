import { Component, OnInit, Input } from '@angular/core';
import {Player} from '../player';
import { HttpClient } from '@angular/common/http';
import { WordsService } from '../words.service';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {
  @Input() players: Player[];
  @Input() teamSize: number;
  words: string[];
  teamNames: string[];

  constructor(private httpClient: HttpClient, private wordsService: WordsService) {
    this.teamNames = [];
   }

  assignTeamName() {
    return this.words[1];
  }

  ngOnInit() {
    this.wordsService.getWords().subscribe({
      next: data => {
        this.words = data;
        for (let i = 0; i < 6; i++) {
          this.teamNames.push(this.words[Math.floor(Math.random() * this.words.length)]);
        }
      },
      error: err => console.log(err)
    });
  }

}

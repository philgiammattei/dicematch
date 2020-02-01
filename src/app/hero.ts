export class Hero {
  name: string;
  selected: boolean;
  season: number;

  constructor(name: string, season: number) {
    this.name = name;
    this.selected = true;
    this.season = season;
  }
}

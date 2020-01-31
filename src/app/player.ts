export class Player {
  name: string;
  hero: string;

  constructor(name: string) {
    this.name = name;
    this.hero = '';
  }

  rename(name: string) {
    this.name = name;
  }
}

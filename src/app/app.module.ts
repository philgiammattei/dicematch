import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiceHeaderComponent } from './dice-header/dice-header.component';
import { NumPlayersComponent } from './num-players/num-players.component';
import { HeroSelectComponent } from './hero-select/hero-select.component';
import { MatcherComponent } from './matcher/matcher.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { DiceFooterComponent } from './dice-footer/dice-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    DiceHeaderComponent,
    NumPlayersComponent,
    HeroSelectComponent,
    MatcherComponent,
    HeroListComponent,
    DiceFooterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

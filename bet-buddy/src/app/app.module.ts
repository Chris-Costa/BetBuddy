import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';
import { ValueBetComponent } from './value-bet/value-bet.component';
import { CardTotalsComponent } from './value-bet/card-totals/card-totals.component';
import { FirstCompletionComponent } from './value-bet/first-completion/first-completion.component';
import { BasketballPlayPropsComponent } from './value-bet/basketball-play-props/basketball-play-props.component';
import { BankrollManagerComponent } from './bankroll-manager/bankroll-manager.component';
import { ArbOppComponent } from './arb-opp/arb-opp.component';
import { FootballPlayerPropsComponent } from './value-bet/football-player-props/football-player-props.component';

@NgModule({
  declarations: [
    AppComponent,
    ValueBetComponent,
    CardTotalsComponent,
    FirstCompletionComponent,
    BasketballPlayPropsComponent,
    BankrollManagerComponent
  ],
  imports: [
    BrowserModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MatButtonModule,
    RouterModule.forRoot([
      {path: 'value-bet', component: ValueBetComponent},
      {path: 'basketball-player-props', component: BasketballPlayPropsComponent},
      {path: 'football-player-props', component: FootballPlayerPropsComponent},
      {path: 'first-completion', component: FirstCompletionComponent},
      {path: 'card-totals', component: CardTotalsComponent},
      {path: 'arb-opp', component: ArbOppComponent},
      {path: 'bankroll-manager', component: BankrollManagerComponent},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
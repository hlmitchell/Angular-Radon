import { Component } from '@angular/core';
import { marketsListInterface } from './store.js'
import { select } from '@angular-redux/store'; //redux

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  @select() title;
  totalMarkets: number = 0;
  totalCards: number = 0;
  lastMarketId: number = 10001;
  marketsList: marketsListInterface[] = [];

  constructor() {
    this.incrementTotalMarkets = this.incrementTotalMarkets.bind(this);
    this.addCard = this.addCard.bind(this);
    this.deleteCard = this.deleteCard.bind(this);
  }

  incrementTotalMarkets(newMarket) {
    this.totalMarkets += 1;
    newMarket.marketId = this.lastMarketId++;
    this.marketsList.push(newMarket);
  }

  addCard(e: Event, i: number) {
    e.preventDefault();
    this.marketsList[i].cards += 1;
    this.totalCards += 1;
  }

  deleteCard(e: Event, i: number) {
    e.preventDefault();
    if (this.marketsList[i].cards > 0) {
      this.marketsList[i].cards -= 1;
      this.totalCards -= 1;
    }
  }
}

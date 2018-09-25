import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'angular-radon';
  totalMarkets: number = 0;
  totalCards: number = 0;
  lastMarketId: number = 10001;
  marketsList = [];

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

import { Component, Input } from '@angular/core';

@Component({
  selector: 'market-display',
  templateUrl: './market-display.component.html',
  styleUrls: ['./market-display.component.css']
})

export class MarketDisplayComponent {

  @Input('marketId') marketId: number;
  @Input('location') location: string;
  @Input('cards') cards: number;
  @Input('totalCards') totalCards: number;
  @Input('addCard') addCard: Function;
  @Input('deleteCard') deleteCard: Function;
  @Input('index') index: number;

  constructor() { 
    this.getPercent = this.getPercent.bind(this);
  }

  getPercent(cards: number) {
    return Math.floor(this.cards / this.totalCards * 100) || 0;
  }

}

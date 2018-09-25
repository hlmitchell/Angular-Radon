import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'market-display',
  templateUrl: './market-display.component.html',
  styleUrls: ['./market-display.component.css']
})
export class MarketDisplayComponent implements OnInit {

  @Input('marketsList') marketsList: Array<Object>;
  @Input('totalCards') totalCards: number;
  @Input('addCard') addCard: Function;
  @Input('deleteCard') deleteCard: Function;

  constructor() { 
    this.getPercent = this.getPercent.bind(this);
  }

  ngOnInit() {
  }

  getPercent(cards: number) {
    return Math.floor(cards / this.totalCards * 100) || 0;
  }

}

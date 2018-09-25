import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'market-creator',
  templateUrl: './market-creator.component.html',
  styleUrls: ['./market-creator.component.css']
})
export class MarketCreatorComponent implements OnInit {

  @Input('incrementTotalMarkets') incrementTotalMarkets: Function;

  location: string = '';

  constructor() { }

  ngOnInit() {
  }

  addMarket(e: Event) {
    e.preventDefault();

    if (this.location !== '') {
      const newMarket = {
        location: this.location,
        cards: 0,
      }
      this.incrementTotalMarkets(newMarket);
      this.location = '';
    }
  }

}

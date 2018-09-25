import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'markets-container',
  templateUrl: './markets-container.component.html',
  styleUrls: ['./markets-container.component.css']
})

export class MarketsContainerComponent implements OnInit {

  @Input('incrementTotalMarkets') incrementTotalMarkets: Function;
  @Input('marketsList') marketsList: Array<Object>;
  @Input('totalCards') totalCards: number;
  @Input('addCard') addCard: Function;
  @Input('deleteCard') deleteCard: Function;

  constructor() { 
  }

  ngOnInit() {
  }

}

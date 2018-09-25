import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'markets-display',
  templateUrl: './markets-display.component.html',
  styleUrls: ['./markets-display.component.css']
})
export class MarketsDisplayComponent implements OnInit {

  @Input('marketsList') marketsList: Array<Object>;
  @Input('totalCards') totalCards: number;
  @Input('addCard') addCard: Function;
  @Input('deleteCard') deleteCard: Function;

  constructor() { }

  ngOnInit() {
  }

}

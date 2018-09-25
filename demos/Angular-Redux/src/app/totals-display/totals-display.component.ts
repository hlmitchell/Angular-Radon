import { Component, Input } from '@angular/core';

@Component({
  selector: 'totals-display',
  templateUrl: './totals-display.component.html',
  styleUrls: ['./totals-display.component.css']
})
export class TotalsDisplayComponent {

  @Input('totalMarkets') totalMarkets: number;
  @Input('totalCards') totalCards: number;

  constructor() { }
}

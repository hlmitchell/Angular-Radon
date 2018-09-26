import { Component } from '@angular/core';
import { select } from '@angular-redux/store'; //redux

@Component({
  selector: 'totals-display',
  templateUrl: './totals-display.component.html',
  styleUrls: ['./totals-display.component.css']
})
export class TotalsDisplayComponent {

  @select() totalMarkets;
  @select() totalCards;

}

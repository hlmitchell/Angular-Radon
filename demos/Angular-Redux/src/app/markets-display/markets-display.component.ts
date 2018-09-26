import { Component } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { AppStateInterface } from '../store';
import { ADD_CARD, DELETE_CARD } from '../constants';

@Component({
  selector: 'markets-display',
  templateUrl: './markets-display.component.html',
  styleUrls: ['./markets-display.component.css']
})
export class MarketsDisplayComponent {

  @select() marketsList;
  @select() totalCards;

  constructor(private ngRedux: NgRedux<AppStateInterface>) { 
    this.addCard = this.addCard.bind(this);
    this.deleteCard = this.deleteCard.bind(this);
  }

  addCard(e: Event, i: number) {
    e.preventDefault();
    this.ngRedux.dispatch({type: ADD_CARD, payload: i});
  }

  deleteCard(e: Event, i: number) {
    e.preventDefault();
    this.ngRedux.dispatch({type: DELETE_CARD, payload: i});
  }

}

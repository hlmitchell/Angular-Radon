import { Component } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { AppStateInterface } from '../store';
import { ADD_MARKET } from '../constants';

@Component({
  selector: 'market-creator',
  templateUrl: './market-creator.component.html',
  styleUrls: ['./market-creator.component.css']
})
export class MarketCreatorComponent {

  location: string = '';

  constructor(private ngRedux: NgRedux<AppStateInterface>) { }

  addMarket(e: Event) {
    e.preventDefault();
    if (this.location !== '') {
      this.ngRedux.dispatch({type: ADD_MARKET, payload: this.location});
      this.location = '';
    }
  }

}

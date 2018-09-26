import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgRedux, NgReduxModule } from '@angular-redux/store'; //redux

import { AppStateInterface, rootReducer, initialState } from './store'; //redux
import { AppComponent } from './app.component';
import { TotalsDisplayComponent } from './totals-display/totals-display.component';
import { MarketsContainerComponent } from './markets-container/markets-container.component';
import { MarketCreatorComponent } from './market-creator/market-creator.component';
import { MarketsDisplayComponent } from './markets-display/markets-display.component';
import { MarketDisplayComponent } from './market-display/market-display.component';

@NgModule({
  declarations: [
    AppComponent,
    TotalsDisplayComponent,
    MarketsContainerComponent,
    MarketCreatorComponent,
    MarketsDisplayComponent,
    MarketDisplayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgReduxModule //redux
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {  
  constructor(ngRedux: NgRedux<AppStateInterface>) { //redux
    ngRedux.configureStore(rootReducer, initialState);
  }
}

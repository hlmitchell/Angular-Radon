import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

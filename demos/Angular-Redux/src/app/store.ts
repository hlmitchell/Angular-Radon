export interface marketsListInterface {
  marketId: number;
  location: string;
  cards: number;
}

export interface AppStateInterface {
  title: string;
  totalMarkets: number;
  totalCards: number;
  lastMarketId: number;
  marketsList: marketsListInterface[];
}

export const initialState: AppStateInterface = {
  title: 'angular-radon',
  totalMarkets: 0,
  totalCards: 0,
  lastMarketId: 10001,
  marketsList: []
}

export function rootReducer(state, action) {
  return state;
}
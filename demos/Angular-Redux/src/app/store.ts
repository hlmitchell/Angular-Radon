import * as types from './constants';

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
  title: 'Angular Redux Demo',
  totalMarkets: 0,
  totalCards: 0,
  lastMarketId: 10001,
  marketsList: []
}

export function rootReducer(state = initialState, action) {
  
  switch(action.type) {
    case types.ADD_MARKET: {
      const lastMarketId: number = state.lastMarketId += 1;
      const totalMarkets: number = state.totalMarkets += 1;
      const newMarket: marketsListInterface = {
        marketId: lastMarketId,
        location: action.payload,
        cards: 0
      }
      // makes a shallow copy
      const marketsList: marketsListInterface[] = state.marketsList.slice();
      marketsList.push(newMarket);

      return {
        ...state,
        lastMarketId,
        totalMarkets,
        marketsList
      }
    }

    case types.ADD_CARD: {
      const totalCards: number = state.totalCards += 1;
      const marketsList: marketsListInterface[] = JSON.parse(JSON.stringify(state.marketsList));
      marketsList[action.payload].cards += 1;
      return {
        ...state,
        totalCards,
        marketsList
      }
    }

    case types.ADD_CARD: {
      const totalCards: number = state.totalCards -= 1;
      const marketsList: marketsListInterface[] = JSON.parse(JSON.stringify(state.marketsList));
      marketsList[action.payload].cards -= 1;
      return {
        ...state,
        totalCards,
        marketsList
      }
    }

    default:
      return state;
  }
}
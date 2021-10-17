import { ApplicationState } from '../application-state';

export const selectUserBalance = (state: ApplicationState) => state.balances.items;
export const selectCurrencyBalance = (state: ApplicationState, value: string) => selectUserBalance(state)[value];
export const selectExchangeWay = (state: ApplicationState) => state.balances.exchangeWay;

import { ApplicationState } from '../application-state';
import { CurrencyItemType } from './reducer';

export const selectCurrencies = (state: ApplicationState) => state.currencies.items;

export const selectCurrenciesIsLodaded = (state: ApplicationState) => state.currencies.isLoaded;

export const selectBaseCurrency = (state: ApplicationState) => state.currencies.baseCurrency;
export const selectReceiveCurrency = (state: ApplicationState) => state.currencies.receiveCurrency;
export const selectCurrencyByName = (state: ApplicationState, currencyName: string) => state.currencies.items.find((item: CurrencyItemType) => item.name === currencyName);

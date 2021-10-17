import { ApplicationState } from '../application-state';
import {
  CURRENCIES_SYMBOLS,
  CURRENCIES_FLAGS,
} from '../constants';
import { CurrencyActionTypes } from './action-types';
import { CurrencyItemType } from './reducer';

const ACCESS_TOKEN = 'ed151571c81316c5671c3fc8d89b49b'; // private key should be in .env file

const getCurrencyItem = (currenciesList: CurrencyItemType[], value: string) => currenciesList.find((e) => e.name === value);

export const requestData = () => ({
  type: CurrencyActionTypes.REQUEST_DATA,
});

const receiveData = (data: CurrencyItemType[]) => ({
  type: CurrencyActionTypes.RECEIVE_DATA,
  data,
});

export const updateReceiveCurrency = (value: CurrencyItemType) => ({
  type: CurrencyActionTypes.UPDATE_RECEIVE_CURRENCY,
  value,
});

export const getReceiveCurrency = () => ({
  type: CurrencyActionTypes.GET_RECEIVE_CURRENCY,
});

export const getBaseCurrency = () => ({
  type: CurrencyActionTypes.GET_BASE_CURRENCY,
});

export const setReceiveCurrency = (value: CurrencyItemType | undefined) => ({
  type: CurrencyActionTypes.SET_RECEIVE_CURRENCY,
  value,
});

export const setBaseCurrency = (value: CurrencyItemType | undefined) => ({
  type: CurrencyActionTypes.SET_BASE_CURRENCY,
  value,
});

export const getInitData = () => (
  async () => {
    const promise = await fetch(`http://api.exchangeratesapi.io/latest?access_key=${ACCESS_TOKEN}8&symbols=USD,GBP,RUB&format=1`);
    const response = await promise.json();
    const { rates } = response;

    const currenciesList = Object.keys(rates).map<CurrencyItemType>((currency: string) => ({
      name: currency,
      symbol: CURRENCIES_SYMBOLS[currency],
      flag: CURRENCIES_FLAGS[currency] || 'black',
      value: rates[currency],
    }));

    currenciesList.push({
      name: 'EUR',
      symbol: '€',
      flag: 'black',
      value: 1,
    });

    return currenciesList;
  }
);

export const setCurrenciesList = (
  currenciesList: CurrencyItemType[],
  base: string,
  receive: string,
) => (
  (dispatch: any) => {
    const baseCurrency = getCurrencyItem(currenciesList, base);
    const receiveCurrency = getCurrencyItem(currenciesList, receive);

    dispatch(setReceiveCurrency(receiveCurrency));
    dispatch(setBaseCurrency(baseCurrency));
    dispatch(receiveData(currenciesList));
  }
);

export const updateBaseCurrency = () => (
  async (dispatch: any, store: () => ApplicationState) => {
    const appState: ApplicationState = store();
    const baseCurrency = appState.currencies.baseCurrency.name;
    const receiveCurrency = appState.currencies.receiveCurrency.name;
    const currenciesList = await dispatch(getInitData());
    dispatch(setCurrenciesList(currenciesList, baseCurrency, receiveCurrency));
  }
);

export const revertCurrencies = (newBase: string, newReceive: string) => (
  async (dispatch: any) => {
    const currenciesList = await dispatch(getInitData());
    dispatch(setCurrenciesList(currenciesList, newBase, newReceive));
  }
);

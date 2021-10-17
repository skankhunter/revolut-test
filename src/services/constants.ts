export const USER_BALANCE_LIST = {
  RUB: 1000,
  USD: 55,
  GBP: 121,
  EUR: 999,
};

export enum CURRENCIES_SYMBOLS {
   RUB = '₽',
   USD = '$',
   GBP = '£',
   EUR = '€',
}

export enum CURRENCIES_FLAGS {
   RUB = 'red',
   USD = 'green',
   GBP = 'blue',
}

export enum CURRENCIES {
   RUB = 'RUB',
   USD = 'USD',
   GBP = 'GBP',
   EUR = 'EUR',
}

export const DEFAULT_CURRENCIES = ['RUB', 'GBP', 'USD'];

export const DEFAULT_RECEIVE_CURRENCY = 'USD';
export const DEFAULT_BASE_CURRENCY = 'EUR';

export const BASE_NAME = 'baseCurrency';
export const RECEIVE_NAME = 'receiveCurrency';
export const OPPOSITE_CURRENCIES = {
  [BASE_NAME]: RECEIVE_NAME,
  [RECEIVE_NAME]: BASE_NAME,
};
export const TIMEOUT = 10000; // 10s

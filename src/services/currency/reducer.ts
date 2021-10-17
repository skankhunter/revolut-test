import { CurrencyActionTypes } from './action-types';

type ActionT = {
    type: string;
    data?: any;
    value?: any;
}

export type CurrencyItemType = {
    name: string;
    symbol: string;
    flag: string;
    value: number;
}

export type CurrenciesStateType = {
    isLoaded: boolean;
    items: CurrencyItemType[];
    baseCurrency: CurrencyItemType;
    receiveCurrency: CurrencyItemType;
}

const initialState: CurrenciesStateType = {
  items: [],
  baseCurrency: {
    name: '',
    symbol: '',
    flag: '',
    value: 0,
  },
  receiveCurrency: {
    name: '',
    symbol: '',
    flag: '',
    value: 0,
  },
  isLoaded: false,
};

export function currencies(state = initialState, action: ActionT) {
  switch (action.type) {
    case CurrencyActionTypes.REQUEST_DATA:
      return {
        ...state,
        isLoaded: false,
        items: [],
      };
    case CurrencyActionTypes.RECEIVE_DATA:
      return {
        ...state,
        isLoaded: true,
        items: action.data,
      };
    case CurrencyActionTypes.SET_BASE_CURRENCY:
      return {
        ...state,
        baseCurrency: action.value,
      };
    case CurrencyActionTypes.GET_BASE_CURRENCY:
      return {
        ...state,
        baseCurrency: state.baseCurrency,
      };
    case CurrencyActionTypes.SET_RECEIVE_CURRENCY:
      return {
        ...state,
        receiveCurrency: action.value,
      };
    case CurrencyActionTypes.GET_RECEIVE_CURRENCY:
      return {
        ...state,
        receiveCurrency: state.receiveCurrency,
      };
    case CurrencyActionTypes.UPDATE_RECEIVE_CURRENCY:
      return {
        ...state,
        receiveCurrency: action.value,
      };
    default:
      return state;
  }
}

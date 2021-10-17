import { BalanceActionTypes } from './action-types';

type ActionT = {
   type: string;
   data?: any;
   value?: any;
};

type BalanceItem = {
   [key: string]: number;
};

export type BalancesStateType = {
   isLoaded: boolean;
   exchangeWay: boolean;
   items: BalanceItem;
};

const initialState: BalancesStateType = {
  items: {},
  exchangeWay: true,
  isLoaded: false,
};

export function balances(state = initialState, action: ActionT) {
  switch (action.type) {
    case BalanceActionTypes.REQUEST_BALANCE:
      return {
        ...state,
        isLoaded: false,
        items: {},
      };
    case BalanceActionTypes.RECEIVE_BALANCE:
      return {
        ...state,
        isLoaded: true,
        items: action.data,
      };
    case BalanceActionTypes.UPDATE_BALANCE:
      return {
        ...state,
        items: {
          ...state.items,
          ...action.value,
        },
      };
    case BalanceActionTypes.UPDATE_EXCHANGE_WAY:
      return {
        ...state,
        exchangeWay: action.value,
      };
    default:
      return state;
  }
}

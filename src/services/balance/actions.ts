import { BalanceActionTypes } from './action-types';

import { USER_BALANCE_LIST } from '../constants';

export type UpdateBalanceType = {
   [key: string]: number;
};

const requestBalance = () => ({
  type: BalanceActionTypes.REQUEST_BALANCE,
});

const receiveBalance = (data: UpdateBalanceType) => ({
  type: BalanceActionTypes.RECEIVE_BALANCE,
  data,
});

export const updateExchangeWay = (value: boolean) => ({
  type: BalanceActionTypes.UPDATE_EXCHANGE_WAY,
  value,
});

export const updateBalance = (value: UpdateBalanceType) => ({
  type: BalanceActionTypes.UPDATE_BALANCE,
  value,
});

export const getUserBalance = () => (dispatch: any) => {
  dispatch(requestBalance());
  const promise = new Promise<UpdateBalanceType>((resolve) => {
    resolve(USER_BALANCE_LIST);
  });
  promise.then(
    (result) => dispatch(receiveBalance(result)),
    (error) => console.error(error),
  );
};

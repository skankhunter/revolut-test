import {
  DEFAULT_RECEIVE_CURRENCY,
  DEFAULT_BASE_CURRENCY,
} from '../constants';

import { getUserBalance } from '../balance/actions';
import { requestData, getInitData, setCurrenciesList } from '../currency/actions';

export const getInitAPI = () => (
  async (dispatch: any) => {
    dispatch(requestData());
    dispatch(getUserBalance());

    const currenciesList = await dispatch(getInitData());

    dispatch(setCurrenciesList(currenciesList, DEFAULT_BASE_CURRENCY, DEFAULT_RECEIVE_CURRENCY));
  }
);

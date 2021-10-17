import { combineReducers } from 'redux';
import { balances } from '../balance/reducer';
import { currencies } from '../currency/reducer';

const rootReducer = combineReducers({
  currencies,
  balances,
});

export default rootReducer;

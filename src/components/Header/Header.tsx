import React from 'react';
import { useSelector } from 'react-redux';
import { selectExchangeWay } from '../../services/balance/selectors';
import { CURRENCIES_SYMBOLS } from '../../services/constants';
import {
  selectBaseCurrency,
  selectReceiveCurrency,
} from '../../services/currency/selectors';
import './styles.scss';

const Header = () => {
  const baseCurrency = useSelector(selectBaseCurrency);
  const receiveCurrency = useSelector(selectReceiveCurrency);
  const exchangeWay = useSelector(selectExchangeWay);

  return (
    <header className="header">
      <span className="header__back" />
      <span className="header__text">
        Buy  &nbsp;
        {exchangeWay ? baseCurrency.name : receiveCurrency.name}
      </span>
      <span className="header__rate">
        1
        {CURRENCIES_SYMBOLS.EUR}
        &nbsp;
        =
        {receiveCurrency.symbol}
        &nbsp;
        {receiveCurrency.value.toFixed(2)}
      </span>
    </header>
  );
};

export default Header;

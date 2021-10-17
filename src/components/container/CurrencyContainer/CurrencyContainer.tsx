import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectBaseCurrency,
  selectCurrencies,
  selectReceiveCurrency,
} from '../../../services/currency/selectors';
import {
  selectExchangeWay,
  selectUserBalance,
} from '../../../services/balance/selectors';
import { updateBalance } from '../../../services/balance/actions';
import {
  BASE_NAME,
  CURRENCIES,
  RECEIVE_NAME,
} from '../../../services/constants';
import Button from '../../Button';
import Currency from '../../Currency';
import ChooseCurrencyModal from '../ChooseCurrency';

export const CurrencyContainer: React.FC = () => {
  const put = useDispatch();
  const currencies = useSelector(selectCurrencies);
  const baseCurrency = useSelector(selectBaseCurrency);
  const receiveCurrency = useSelector(selectReceiveCurrency);
  const userBalance = useSelector(selectUserBalance);
  const exchangeWay = useSelector(selectExchangeWay);

  const [fromValue, setFromValue] = useState(0);
  const [toValue, setToValue] = useState(0);
  const [fromCurrency] = useState(baseCurrency.name);
  const [toCurrency, setToCurrency] = useState(receiveCurrency.name);

  const [currencyType, setCurrencyType] = useState<string>('');
  const [isNotEnoughBalance, setIsNotEnoughBalance] = useState<boolean>(false);
  const [isShowModal, setShowModal] = useState<boolean>(false);

  useEffect(() => {
    setToCurrency(receiveCurrency.name);
  }, [receiveCurrency]);

  useEffect(() => {
    const value = exchangeWay ? fromValue : toValue;
    const currencyBalance = exchangeWay
      ? userBalance[fromCurrency]
      : userBalance[toCurrency];
    setIsNotEnoughBalance(value > currencyBalance);
  }, [fromValue, toValue]);

  const validatedValue = (str: string) => str.replace(/[^0-9\\.]/, '');

  const getCurrencyValue = (name: string) => currencies.find((cur) => cur.name === name)?.value || 1;
  
  const getCurrencyBalance = (value: string) => userBalance[value];

  const convertFromTo = (value: number) => {
    const fromRate = fromCurrency === CURRENCIES.EUR ? 1 : getCurrencyValue(fromCurrency);
    const valueInEur = value / fromRate;
    const toRate = toCurrency === CURRENCIES.EUR ? 1 : getCurrencyValue(toCurrency);
    const toValue = valueInEur * toRate;
    setToValue(parseFloat(toValue.toFixed(2)));
  };

  const convertToFrom = (value: number) => {
    const toRate = toCurrency === CURRENCIES.EUR ? 1 : getCurrencyValue(toCurrency);
    const valueInEur = value / toRate;
    const fromRate = fromCurrency === CURRENCIES.EUR ? 1 : getCurrencyValue(fromCurrency);
    const fromValue = valueInEur * fromRate;
    setFromValue(parseFloat(fromValue.toFixed(2)));
  };

  const handleFromValueChange = (e: React.BaseSyntheticEvent) => {
    const value = parseFloat(validatedValue(e.target.value));

    if (Number.isNaN(value)) {
      setToValue(0);
      setFromValue(0);

      return;
    }

    setFromValue(parseFloat(value.toFixed(2)));
    convertFromTo(parseFloat(value.toFixed(2)));
  };

  const handleToValueChange = (e: React.BaseSyntheticEvent) => {
    const value = parseFloat(validatedValue(e.target.value));

    if (Number.isNaN(value)) {
      setToValue(0);
      setFromValue(0);

      return;
    }

    setToValue(parseFloat(value.toFixed(2)));
    convertToFrom(parseFloat(value.toFixed(2)));
  };

  const handleSubmit = (e: React.BaseSyntheticEvent) => {
    e.preventDefault();

    const fromBalance = exchangeWay
      ? getCurrencyBalance(baseCurrency.name) - fromValue
      : getCurrencyBalance(baseCurrency.name) + fromValue;
    const toBalance = exchangeWay
      ? getCurrencyBalance(receiveCurrency.name) + toValue
      : getCurrencyBalance(receiveCurrency.name) - toValue;

    put(
      updateBalance({
        [baseCurrency.name]: parseFloat(fromBalance.toFixed(2)),
        [receiveCurrency.name]: parseFloat(toBalance.toFixed(2)),
      }),
    );

    setFromValue(0);
    setToValue(0);
  };

  const changeCurrencyType = (inputName: string) => {
    if (inputName === BASE_NAME) {
      return;
    }
    setShowModal(true);
    setCurrencyType(inputName);
  };

  const hideModal = () => {
    setShowModal(false);
  };

  return (
    <div className="currency--wrapper">
      <Currency
        currency={baseCurrency}
        changeCurrencyType={() => changeCurrencyType(BASE_NAME)}
        balanceAmount={getCurrencyBalance(baseCurrency.name)}
        handleChange={handleFromValueChange}
        value={fromValue}
        name={BASE_NAME}
        isInputSymbol={fromValue > 0}
        inputSymbolType={exchangeWay ? '-' : '+'}
        isNotEnoughBalance={exchangeWay && isNotEnoughBalance}
      />
      <Currency
        currency={receiveCurrency}
        changeCurrencyType={() => changeCurrencyType(RECEIVE_NAME)}
        balanceAmount={getCurrencyBalance(receiveCurrency.name)}
        handleChange={handleToValueChange}
        value={toValue}
        name={RECEIVE_NAME}
        isInputSymbol={toValue > 0}
        isNotEnoughBalance={!exchangeWay && isNotEnoughBalance}
        inputSymbolType={exchangeWay ? '+' : '-'}
      />
      {isShowModal && (
      <ChooseCurrencyModal
        currencyType={currencyType}
        currencies={currencies}
        hideChooseCurrency={hideModal}
      />
      )}
      <Button
        baseCurrencyName={baseCurrency.name}
        receiveCurrencyName={receiveCurrency.name}
        exchangeWay={exchangeWay}
        disabled={isNotEnoughBalance || (fromValue === 0 && toValue === 0)}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

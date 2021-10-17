import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrenciesIsLodaded } from '../../services/currency/selectors';
import { updateBaseCurrency } from '../../services/currency/actions';
import { getInitAPI } from '../../services/api/actions';
import CurrencyContainer from '../container/CurrencyContainer';
import RevertContainer from '../container/RevertContainer';
import Loader from '../Loader';
import { TIMEOUT } from '../../services/constants';

const Exchanger: React.FC = () => {
  const put = useDispatch();
  const isLoaded = useSelector(selectCurrenciesIsLodaded);

  const [intervalTimer, setIntervalTimer] = useState(0);

  useEffect(() => {
    put(getInitAPI());
    const interval: number = window.setInterval(() => {
      put(updateBaseCurrency());
    }, TIMEOUT);

    setIntervalTimer(interval);
    return () => {
      clearInterval(intervalTimer);
    };
  }, []);
  if (!isLoaded) {
    return <Loader />;
  }

  return (
    <form className="exchangeForm">
      <CurrencyContainer />
      <RevertContainer />
    </form>
  );
};

export default Exchanger;

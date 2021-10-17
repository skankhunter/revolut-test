import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateExchangeWay } from '../../../services/balance/actions';
import { selectExchangeWay } from '../../../services/balance/selectors';

import './styles.scss';

const RevertContainer: React.FC = () => {
  const put = useDispatch();
  const exchangeWay = useSelector(selectExchangeWay);

  const onUpdateExchangeWay = (value: boolean) => {
    put(updateExchangeWay(value));
  };
  const arrowWay = exchangeWay
    ? 'currency__revert-arrow-down'
    : 'currency__revert-arrow-up';
  return (
    <div
      role="presentation"
      className="currency__revert"
      onClick={() => onUpdateExchangeWay(!exchangeWay)}
    >
      <span className={`${arrowWay}`} />
    </div>
  );
};

export default RevertContainer;

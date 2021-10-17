import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserBalance } from '../../../services/balance/selectors';
import { setReceiveCurrency } from '../../../services/currency/actions';
import { CurrencyItemType } from '../../../services/currency/reducer';

import './styles.scss';

type Props = {
   currencyType: string;
   currencies: CurrencyItemType[];
   hideChooseCurrency: () => void;
};

export const ChooseCurrencyModal: React.FC<Props> = (props) => {
  const put = useDispatch();
  const { currencies, hideChooseCurrency } = props;
  const userBalance = useSelector(selectUserBalance);

  const onUpdateReceiveCurrency = (currency: CurrencyItemType) => {
    put(setReceiveCurrency(currency));
    hideChooseCurrency();
  };

  return (
    <div className="currency__modal-wrapper">
      <span
        className="currency__modal-close"
        onClick={() => hideChooseCurrency()}
      />
      <div className="currency__modal">
        {currencies
          .filter((currency) => currency.name !== 'EUR')
          .map((currency) => (
            <div
              key={currency.name}
              className="currency__modal-item"
              onClick={() => onUpdateReceiveCurrency(currency)}
            >
              <span className="currency__modal-item--name">
                {currency.name}
              </span>
              <span className="currency__modal-item--balance">
                {userBalance[currency.name]}
              </span>
              <span className="currency__modal-item--symbol">
                {currency.symbol}
              </span>
            </div>
          ))}
      </div>
    </div>
  );
};

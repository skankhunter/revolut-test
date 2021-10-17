import React from 'react';
import CurrencyType from './CurrencyType';
import CurrencyBalance from './CurrencyBalance';
import { CurrencyItemType } from '../../services/currency/reducer';
import Input from '../Input';

import './styles.scss';

type CurrencyProps = {
   currency: CurrencyItemType;
   changeCurrencyType: (e: React.BaseSyntheticEvent) => void;
   balanceAmount: number;
   value: number;
   handleChange: (e: React.BaseSyntheticEvent) => void;
   name: string;
   isInputSymbol: boolean;
   inputSymbolType: string;
   isNotEnoughBalance: boolean;
};

const Currency: React.FC<CurrencyProps> = ({
  currency,
  name,
  value,
  changeCurrencyType,
  balanceAmount,
  handleChange,
  isInputSymbol,
  inputSymbolType,
  isNotEnoughBalance,
}: CurrencyProps) => (
  <div className="currency">
    <div className="currency__balance-info">
      <CurrencyType
        typeName={name}
        currencyName={currency.name}
        changeCurrencyType={changeCurrencyType}
      />
      <CurrencyBalance
        balanceAmount={balanceAmount}
        balanceName={currency.symbol}
        isNotEnoughBalance={isNotEnoughBalance}
      />
    </div>

    <div className="currency__input--wrapper">
      <div className="currency__input-value">
        {isInputSymbol && (
        <span className="currency__input-symbol">
          {inputSymbolType}
        </span>
        )}
        {value}
      </div>
      {isNotEnoughBalance && (
      <span className="currency__input-hint">exceeds balance</span>
      )}
      <Input onChange={handleChange} value={value} name={name} />
    </div>
  </div>
);

export default Currency;

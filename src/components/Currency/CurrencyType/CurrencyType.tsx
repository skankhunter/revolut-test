import React from 'react';
import { BASE_NAME } from '../../../services/constants';

type CurrencyTypeProps = {
   changeCurrencyType: (e: React.BaseSyntheticEvent) => void;
   currencyName: string;
   typeName: string;
};

const CurrencyType = ({
  currencyName,
  typeName,
  changeCurrencyType,
}: CurrencyTypeProps) => (
  <div role="presentation" className="currency__name" onClick={changeCurrencyType}>
    {currencyName}
    {typeName !== BASE_NAME && <span className="currency__name-icon" />}
  </div>
);

export default CurrencyType;

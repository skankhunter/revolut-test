import React from 'react';

type CurrencyBalanceProps = {
    isNotEnoughBalance: boolean,
    balanceAmount: number,
    balanceName: string,
}

const CurrencyBalance: React.FC<CurrencyBalanceProps> = ({
  balanceAmount,
  balanceName,
  isNotEnoughBalance,
}: CurrencyBalanceProps) => (
  <span className={`currency__balance ${isNotEnoughBalance ? 'red' : ''}`}>
    {`Balance: ${balanceName}${balanceAmount}`}
  </span>
);

export default CurrencyBalance;

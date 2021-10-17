import React from 'react';
import './styles.scss';

type ButtonProps = {
   baseCurrencyName: string;
   receiveCurrencyName: string;
   exchangeWay: boolean;
   disabled: boolean;
   handleSubmit: (e: React.BaseSyntheticEvent) => void;
};

const Button: React.FC<ButtonProps> = ({
  exchangeWay,
  baseCurrencyName,
  receiveCurrencyName,
  disabled,
  handleSubmit,
}: ButtonProps) => (
  <button
    className={`currency__button ${disabled ? '' : 'active'}`}
    type="submit"
    form="exchangeForm"
    disabled={disabled}
    onClick={handleSubmit}
  >
    Buy
    {' '}
    {exchangeWay ? baseCurrencyName : receiveCurrencyName}
    {' '}
    with
    {' '}
    {exchangeWay ? receiveCurrencyName : baseCurrencyName}
  </button>
);

export default Button;

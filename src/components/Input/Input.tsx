import React from 'react';
import './styles.scss';

type InputProps = {
   onChange: (e: React.BaseSyntheticEvent) => void;
   name: string;
   value: number;
};

const Input = ({ onChange, value, name }: InputProps) => (
  <input
    className="currency__input"
    type="text"
    value={value}
    name={name}
    onChange={onChange}
    placeholder="0"
    autoComplete="off"
  />
);

export default Input;

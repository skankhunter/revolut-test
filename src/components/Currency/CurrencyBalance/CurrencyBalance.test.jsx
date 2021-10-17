import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CurrencyBalance from './CurrencyBalance';

configure({ adapter: new Adapter() });

describe('<CurrencyBalance />', () => {
  it('renders CurrencyBalance component', () => {
    const currencyBalance = shallow(<CurrencyBalance />);
    expect(currencyBalance.find('.currency__balance').length).toEqual(1);
  });
  it('renders CurrencyBalance component with not enough balance', () => {
    const isNotEnoughBalance = true;
    const currencyBalance = shallow(<CurrencyBalance isNotEnoughBalance={isNotEnoughBalance} />);
    expect(currencyBalance.find('.currency__balance').hasClass('red')).toEqual(true);
  });
});

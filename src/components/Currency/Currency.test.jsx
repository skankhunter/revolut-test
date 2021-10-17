import React from 'react';
import { shallow } from 'enzyme';
import Currency from './currency';

const props = {
  currency: {
    name: 'EUR',
    symbol: '€',
    flag: 'black',
    value: 1,
  },
};

describe('<Currency />', () => {
  it('renders Currency component', () => {
    const component = shallow(<Currency {...props} />);

    expect(component.find('.currency').length).toEqual(1);
  });
  it('renders Currency component with not enough balance', () => {
    const isInputSymbol = true;
    const currency = shallow(<Currency {...props} isInputSymbol={isInputSymbol} />);

    expect(currency.find('.currency__input-symbol').length).toEqual(1);
  });
});

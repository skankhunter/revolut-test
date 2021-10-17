import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import CurrencyType from './CurrencyType';

configure({ adapter: new Adapter() });

const props = {
  typeName: 'baseName',
  currencyName: 'RUB',
  changeCurrencyType: jest.fn(),
};

describe('<CurrencyType />', () => {
  it('renders CurrencyType component', () => {
    const component = shallow(<CurrencyType {...props} />);
    expect(component.find('.currency__name').length).toEqual(1);
  });
  it('should lift click event up', () => {
    const onClick = jest.fn();
    const component = shallow(<CurrencyType {...props} changeCurrencyType={onClick} />);

    component.find('.currency__name').simulate('click');
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});

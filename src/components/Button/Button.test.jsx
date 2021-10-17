import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import {
  configure, shallow,
} from 'enzyme';
import Button from './Button';

configure({ adapter: new Adapter() });

describe('<Button />', () => {
  it('renders button component', () => {
    const button = shallow(<Button />);
    expect(button.find('.currency__button').length).toEqual(1);
  });
  it('renders button component with active class', () => {
    const isActive = true;
    const button = shallow(<Button isActive={isActive} />);
    expect(button.find('.currency__button').hasClass('active')).toEqual(true);
  });
});

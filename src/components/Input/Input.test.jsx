import React from 'react';
import { shallow } from 'enzyme';
import Input from './Input';

describe('<Input />', () => {
  it('renders Input component', () => {
    const wrapper = shallow(<Input />);

    expect(wrapper.find('.currency__input').length).toEqual(1);
  });
  it('should lift change event up', () => {
    const onChange = jest.fn();
    const wrapper = shallow(<Input onChange={onChange} />);

    wrapper.find('input').simulate('change', 123);
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith(123);
  });
});

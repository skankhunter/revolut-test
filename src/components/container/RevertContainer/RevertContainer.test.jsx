import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import RevertContainer from './RevertContainer';

describe('<RevertContainer />', () => {
  const initialState = {
    balances: {
      exchangeWay: true,
    },
    currencies: {
      baseCurrency: {
        name: 'EUR',
        symbol: '€',
        flag: 'black',
        value: 1,
      },
      receiveCurrency: {
        name: 'RUB',
        symbol: '€',
        flag: 'black',
        value: 2,
      },
    },
  };
  const mockStore = configureStore();
  it('renders RevertContainer component', () => {
    const store = mockStore(initialState);
    const component = mount(<Provider store={store}><RevertContainer /></Provider>);

    expect(component.find('.currency__revert').length).toEqual(1);
  });
});

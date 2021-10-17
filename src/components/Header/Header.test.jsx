import React from 'react';
import { mount, shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Header from './Header';

describe('<Header />', () => {
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
  it('renders Header component', () => {
    const store = mockStore(initialState);
    const header = mount(<Provider store={store}><Header /></Provider>);

    expect(header.find('header').length).toEqual(1);
  });
});

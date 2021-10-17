/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import ChooseCurrencyModal from './index';

let component;

describe('<ChooseCurrency />', () => {
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
  beforeEach(() => {
    const store = mockStore(initialState);
    const props = {
      currencies: [{
        name: 'EUR',
        symbol: '€',
        flag: 'black',
        value: 1,
      }],
    };
    component = mount(<Provider store={store}><ChooseCurrencyModal {...props} /></Provider>);
  });
  it('renders ChooseCurrency component', () => {
    expect(component.find('.currency__modal-wrapper').length).toEqual(1);
  });
});

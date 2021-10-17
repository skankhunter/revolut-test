import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Exchager from './index';

describe('Modal Component', () => {
  const initialState = {
    currencies: {
      isLoaded: false,
    },
  };
  const mockStore = configureStore([thunk]);
  it('should render the component', () => {
    const store = mockStore(initialState);
    const component = mount(<Provider store={store}><Exchager /></Provider>);
    expect(component.find('.loader').length).toEqual(1);
  });
});

import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Category from './components/Categories';

describe('Category component', () => {
  it('matches the snapshot', () => {
    const cryptos = [
      {
        symbol: 'BTC',

      },
      {
        symbol: 'ETH',
      },
    ];

    const component = renderer.create(
      <Provider store={store}>
        <Router>
          <Category cryptos={cryptos} />
        </Router>
      </Provider>
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
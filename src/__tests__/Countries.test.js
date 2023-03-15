import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Store from '../features/Store';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Countries from '../components/pages/Countries';

it('renders correctly', () => {
  const data = renderer
    .create(
      <Provider store={Store}>
        <Router>
          <Route path="/countries/:alpha3Code?">
            <Countries />
          </Route>
        </Router>
      </Provider>
    )
    .toJSON();
  expect(data).toMatchSnapshot();
});

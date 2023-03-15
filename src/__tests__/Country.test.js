import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Store from '../features/Store';
import Country from '../components/pages/Country';

it('renders correctly', () => {
  const data = renderer
    .create(
      <Provider store={Store}>
        <Router>
          <Route path="/countries/:alpha3Code?">
            <Country />
          </Route>
        </Router>
      </Provider>,
    )
    .toJSON();
  expect(data).toMatchSnapshot();
});

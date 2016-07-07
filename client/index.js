/**
 * Client entry point
 */
import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import AppWrapper from './AppWrapper';
import { configureStore } from './store';

const store = configureStore(window.__INITIAL_STATE__);
const mountApp = document.getElementById('root');

render(
  <AppContainer>
    <AppWrapper store={store} />
  </AppContainer>,
  mountApp
);

if (module.hot) {
  module.hot.accept('./AppWrapper', () => {
    const NextApp = require('./AppWrapper').default; // eslint-disable-line global-require
    render(
      <AppContainer>
        <NextApp store={store} />
      </AppContainer>,
      mountApp
    );
  });
}

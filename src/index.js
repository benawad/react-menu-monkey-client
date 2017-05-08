import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import Routes from './routes';

const app = (
  <Provider store={store}>
    <Routes />
  </Provider>
);

ReactDOM.render(
  app,
  document.getElementById('root'),
);

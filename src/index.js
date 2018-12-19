import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/app';
import store from './configureStore';

const rootElem = document.getElementById('app');
ReactDOM.render(
  <Provider store={store()}>
    <App />
  </Provider>,
  rootElem
);
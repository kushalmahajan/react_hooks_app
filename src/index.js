import React from 'react';
import ReactDOM from 'react-dom';
import {StoreContext} from 'redux-react-hook';
import App from './components/app';
import store from './configureStore';

const rootElem = document.getElementById('app');
ReactDOM.render(
  <StoreContext.Provider value={store()}>
    <App />
  </StoreContext.Provider>,
  rootElem
);
import 'whatwg-fetch'; // Native fetch polyfill
import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import sequence from '../modules/sequence';
import App from '../components/app';

const store = createStore(
  sequence,
  applyMiddleware(thunk),
);

const AppContainer = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default AppContainer;

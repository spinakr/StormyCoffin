import 'whatwg-fetch'; // Native fetch polyfill
import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import lightsReducer from '../reducers/tileReducer';
import App from './app';

const store = createStore(lightsReducer);

class AppContainer extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

export default AppContainer;

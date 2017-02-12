import 'whatwg-fetch'; // Native fetch polyfill
import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import AppContainer from './components/appContainer';
import lightsReducer from './reducers/tileReducer';

const store = createStore(lightsReducer);

class StormyCoffin extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}
export default StormyCoffin;


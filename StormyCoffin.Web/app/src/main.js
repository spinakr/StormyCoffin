import 'whatwg-fetch'; // Native fetch polyfill
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import AppContainer from './components/AppContainer';
import lightsReducer from './reducers/lightsReducer';

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

ReactDOM.render(<StormyCoffin />, document.getElementById('stormycoffin-app'));

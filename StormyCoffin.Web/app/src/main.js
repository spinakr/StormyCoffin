import 'whatwg-fetch'; // Native fetch polyfill
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import AppContainer from './components/AppContainer';
import reducer from './reducers/index';

const store = createStore(reducer);

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

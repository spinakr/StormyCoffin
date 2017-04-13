import 'whatwg-fetch'; // Native fetch polyfill
import React from 'react';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import sequence from './modules/sequence';
import gameState from './modules/gameState';
import SequenceContainer from './containers/sequenceContainer';
import ControllerContainer from './containers/controllerContainer';

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable */

const reducer = combineReducers({
  gameState,
  sequence,
});

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk)),
);

const App = () => {
  const style = {
    margin: 'auto',
    width: '50%',
    textAlign: 'center',
  };

  const containerStyle = {
    border: '3px solid green',
    margin: '10px',
  };

  return (
    <Provider store={store}>
      <div style={style}>
        <h1>Stormy Coffin</h1>

        <div style={containerStyle} >
          <SequenceContainer />
        </div>

        <div style={containerStyle} >
          <ControllerContainer />
        </div>

      </div>
    </Provider>
  );
};

export default App;

import 'whatwg-fetch'; // Native fetch polyfill
import React from 'react';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import sequence from './modules/sequence';
import gameState from './modules/gameState';
import SequenceContainer from './containers/sequenceContainer';
import ControllerContainer from './containers/controllerContainer';
import ScoreContainer from './containers/scoreContainer';

const reducer = combineReducers({
  gameState,
  sequence,
});

const store = createStore(
  reducer,
  applyMiddleware(thunk),
);

const App = () => {
  const style = {
    margin: 'auto',
    width: '50%',
    textAlign: 'center',
  };
  return (
    <Provider store={store}>
      <div style={style}>
        <h1>Stormy Coffin</h1>
        <SequenceContainer />
        <ControllerContainer />
        <ScoreContainer />
      </div>
    </Provider>
  );
};

export default App;

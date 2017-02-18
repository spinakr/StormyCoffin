import 'whatwg-fetch'; // Native fetch polyfill
import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import sequence from './modules/sequence';
import MemitContainer from './containers/memitContainer';
import ScoreContainer from './containers/scoreContainer';

const store = createStore(
  sequence,
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
        <MemitContainer />
        <ScoreContainer />
      </div>
    </Provider>
  );
};

export default App;

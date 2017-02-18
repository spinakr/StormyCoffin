import React, { Component } from 'react';
import MemitContainer from '../containers/memitContainer';

class App extends Component {
  render() {
    const style = {
      margin: 'auto',
      width: '50%',
      textAlign: 'center',
    };

    return (
      <div style={style}>
        <h1>Stormy Coffin</h1>
        <MemitContainer />
      </div>
    );
  }
}

App.propTypes = {

};

export default App;

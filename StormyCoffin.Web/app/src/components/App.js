import React, { Component } from 'react';
import MemitContainer from './memitContainer';

class App extends Component {
  render() {
    const style = {
      margin: 'auto',
      width: '50%',
      border: '3px solid green',
      padding: '50px',
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

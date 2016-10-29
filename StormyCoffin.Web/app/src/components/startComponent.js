import React, { Component, PropTypes } from 'react';
import Radium from 'radium';

const style = {
  backgroundColor: '#768d87',
  borderRadius: '5px',
  border: '1px solid #566963',
  margin: '20px',
  fontFamily: 'Arial',
  fontSize: '15px',
  fontWeight: 'bold',
  padding: '11px 23px',
  ':hover': {
    backgroundColor: '#6c7c7c',
  },
};

class StartComponent extends Component {
  render() {
    return (
      <button onClick={this.props.playSequence} style={style}>Start</button>
    );
  }
}

StartComponent.propTypes = {
  playSequence: PropTypes.func,
};

export default new Radium(StartComponent);

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

class ControllComponent extends Component {
  render() {
    return (
      <div>
        <button key={1} onClick={this.props.playSequence} style={style}>Start</button>
        <button key={2} onClick={this.props.addNewToSequence} style={style}>Next</button>
      </div>
    );
  }
}

ControllComponent.propTypes = {
  playSequence: PropTypes.func,
  addNewToSequence: PropTypes.func,
};

export default new Radium(ControllComponent);

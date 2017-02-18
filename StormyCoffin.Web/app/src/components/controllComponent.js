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
    const { isReadyForNextRound, playSequence, addNewToSequence } = this.props;
    return (
      <div>
        <button key={1} onClick={playSequence} style={style} disabled={!isReadyForNextRound}>Start</button>
        <button key={2} onClick={addNewToSequence} style={style} disabled={!isReadyForNextRound}>Next</button>
      </div>
    );
  }
}

ControllComponent.propTypes = {
  playSequence: PropTypes.func,
  addNewToSequence: PropTypes.func,
  isReadyForNextRound: PropTypes.bool,
};

export default new Radium(ControllComponent);

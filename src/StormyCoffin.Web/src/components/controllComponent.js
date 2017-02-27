import React, { PropTypes } from 'react';
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

const ControllComponent = ({ playSequence, isReadyForNextRound, isRecallingSequence, hasLost }) => {
  if (isReadyForNextRound) {
    return (
      <div>
        <button onClick={playSequence} style={style} >Play!</button>
      </div>
    );
  } else if (isRecallingSequence) {
    return (
      <div>
        <button style={style}>Recall it!</button>
      </div>
    );
  } else if (hasLost) {
    return (
      <div>
        <button style={style}>You lost!</button>
      </div>
    );
  }
  return (
    <button style={style}>Memorize it!</button>
  );
};

ControllComponent.propTypes = {
  playSequence: PropTypes.func,
  isReadyForNextRound: PropTypes.bool,
  isRecallingSequence: PropTypes.bool,
  hasLost: PropTypes.bool,
};

export default new Radium(ControllComponent);

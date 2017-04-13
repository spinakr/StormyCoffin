import React, { PropTypes } from 'react';
import { playButton } from '../styles';

const ControllComponent = ({ playSequence, addNewToSequence, isPlayingSequence }) => {
  if (isPlayingSequence) {
    return (
      <button onClick={() => {}} style={playButton} >Memorize!</button>
    );
  }
  return (
    <div>
      <button key="1" onClick={playSequence} style={playButton} >Play!</button>
      <button key="2" onClick={addNewToSequence} style={playButton} >Next!</button>
    </div>
  );
};

ControllComponent.propTypes = {
  playSequence: PropTypes.func,
  isPlayingSequence: PropTypes.bool,
  addNewToSequence: PropTypes.func,
};

export default ControllComponent;

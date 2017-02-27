import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import TileGroup from '../components/tileGroupComponent';
import { tileClicked } from '../modules/sequence';
import { gameStates } from '../modules/gameState';


const SequenceContainer = ({ handleTileClicked, signalLights, hasLost }) => {
  const style = {
    border: '3px solid green',
    padding: '50px',
  };

  return (
    <div style={style}>
      <TileGroup
        handleTileClicked={handleTileClicked.bind(this)}
        signalLights={signalLights}
        hasLost={hasLost}
      />
    </div>
  );
};

const mapStateToProps = state => ({
  signalLights: state.sequence.signalLights,
  pattern: state.sequence.pattern,
  isReadyForNextRound: state.gameState.gameState !== gameStates.PLAYING_SEQUENCE,
  hasLost: state.gameState.gameState === gameStates.PLAYER_LOST,
});

const mapDispatchToProps = (dispatch) => {
  return {
    handleTileClicked: bindActionCreators(tileClicked, dispatch),
  };
};

SequenceContainer.propTypes = {
  signalLights: PropTypes.array,
  handleTileClicked: PropTypes.func,
  hasLost: PropTypes.bool,
};

export default connect(mapStateToProps, mapDispatchToProps)(SequenceContainer);

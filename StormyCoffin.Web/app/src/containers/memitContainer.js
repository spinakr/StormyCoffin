import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import TileGroup from '../components/tileGroupComponent';
import ControllComponent from '../components/controllComponent';
import { playSequence, addNewToSequence, tileClicked } from '../modules/sequence';
import { gameStates } from '../modules/gameState';


class MemitContainer extends Component {
  render() {
    const style = {
      border: '3px solid green',
      padding: '50px',
    };

    return (
      <div style={style}>
        <TileGroup
          handleTileClicked={this.props.handleTileClicked.bind(this)}
          signalLights={this.props.signalLights}
          hasLost={this.props.hasLost}
        />
        <ControllComponent
          playSequence={this.props.playSequence.bind(this)}
          addNewToSequence={this.props.addNewToSequence.bind(this)}
          isReadyForNextRound={this.props.isReadyForNextRound}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  signalLights: state.sequence.signalLights,
  pattern: state.sequence.pattern,
  isReadyForNextRound: state.gameState.gameState !== gameStates.PLAYING_SEQUENCE,
  hasLost: state.gameState.gameState === gameStates.LOST,
});

const mapDispatchToProps = (dispatch) => {
  return {
    playSequence: bindActionCreators(playSequence, dispatch),
    addNewToSequence: bindActionCreators(addNewToSequence, dispatch),
    handleTileClicked: bindActionCreators(tileClicked, dispatch),
  };
};

MemitContainer.propTypes = {
  signalLights: PropTypes.array,
  playSequence: PropTypes.func,
  addNewToSequence: PropTypes.func,
  handleTileClicked: PropTypes.func,
  isReadyForNextRound: PropTypes.bool,
  hasLost: PropTypes.bool,
};

export default connect(mapStateToProps, mapDispatchToProps)(MemitContainer);

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ControllComponent from '../components/controllComponent';
import { playSequence, addNewToSequence } from '../modules/sequence';
import { gameStates } from '../modules/gameState';


class ControllerContainer extends Component {
  render() {
    const style = {
      border: '3px solid yellow',
      marginTop: '10px',
      padding: '10px',
    };

    return (
      <div style={style}>
        <ControllComponent
          playSequence={this.props.playSequence.bind(this)}
          isReadyForNextRound={this.props.isReadyForNextRound}
          isRecallingSequence={this.props.isRecallingSequence}
          hasLost={this.props.hasLost}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isReadyForNextRound: state.gameState.gameState === gameStates.NEW_ROUND_INITIATED,
  hasLost: state.gameState.gameState === gameStates.PLAYER_LOST,
  isRecallingSequence: state.gameState.gameState === gameStates.RECALLING_SEQUENCE,
});

const mapDispatchToProps = (dispatch) => {
  return {
    playSequence: bindActionCreators(playSequence, dispatch),
    addNewToSequence: bindActionCreators(addNewToSequence, dispatch),
  };
};

ControllerContainer.propTypes = {
  playSequence: PropTypes.func,
  isReadyForNextRound: PropTypes.bool,
  isRecallingSequence: PropTypes.bool,
  hasLost: PropTypes.bool,
};

export default connect(mapStateToProps, mapDispatchToProps)(ControllerContainer);

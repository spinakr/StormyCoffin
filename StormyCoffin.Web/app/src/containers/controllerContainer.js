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
          addNewToSequence={this.props.addNewToSequence.bind(this)}
          isReadyForNextRound={this.props.isReadyForNextRound}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isReadyForNextRound: state.gameState.gameState !== gameStates.PLAYING_SEQUENCE,
  hasLost: state.gameState.gameState === gameStates.LOST,
});

const mapDispatchToProps = (dispatch) => {
  return {
    playSequence: bindActionCreators(playSequence, dispatch),
    addNewToSequence: bindActionCreators(addNewToSequence, dispatch),
  };
};

ControllerContainer.propTypes = {
  playSequence: PropTypes.func,
  addNewToSequence: PropTypes.func,
  isReadyForNextRound: PropTypes.bool,
};

export default connect(mapStateToProps, mapDispatchToProps)(ControllerContainer);

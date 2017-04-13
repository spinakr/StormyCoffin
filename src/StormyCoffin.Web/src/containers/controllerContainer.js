import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ControllComponent from '../components/controllComponent';
import { playSequence, addNewToSequence } from '../modules/sequence';
import { gameStates } from '../modules/gameState';


class ControllerContainer extends Component {
  render() {
    return (
      <div>
        <ControllComponent
          isPlayingSequence={this.props.isPlayingSequence}
          playSequence={this.props.playSequence}
          addNewToSequence={this.props.addNewToSequence}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isPlayingSequence: state.gameState.gameState === gameStates.PLAYING_SEQUENCE,
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
  isPlayingSequence: PropTypes.bool,
};

export default connect(mapStateToProps, mapDispatchToProps)(ControllerContainer);

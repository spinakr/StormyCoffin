import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import TileGroup from '../components/tileGroupComponent';
import ControllComponent from '../components/controllComponent';
import { playSequence, addNewToSequence } from '../modules/sequence';
import { gameStates } from '../modules/gameState';

class MemitContainer extends Component {
  render() {
    const style = {
      border: '3px solid green',
      padding: '50px',
    };

    return (
      <div style={style}>
        <TileGroup signalLights={this.props.signalLights} />
        <ControllComponent
          playSequence={this.props.playSequence.bind(this)}
          addNewToSequence={this.props.addNewToSequence.bind(this)}
          sequencePlaying={this.props.gameState === gameStates.PLAYING_SEQUENCE}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  signalLights: state.sequence.signalLights,
  pattern: state.sequence.pattern,
  gameState: state.gameState.gameState,
});

const mapDispatchToProps = (dispatch) => {
  return {
    playSequence: bindActionCreators(playSequence, dispatch),
    addNewToSequence: bindActionCreators(addNewToSequence, dispatch),
  };
};

MemitContainer.propTypes = {
  signalLights: PropTypes.array,
  playSequence: PropTypes.func,
  addNewToSequence: PropTypes.func,
  gameState: PropTypes.number,
};

export default connect(mapStateToProps, mapDispatchToProps)(MemitContainer);

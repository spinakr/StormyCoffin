import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import TileGroup from '../components/tileGroupComponent';
import ControllComponent from '../components/controllComponent';
import { playSequence, addNewToSequence } from '../modules/sequence';

class MemitContainer extends Component {
  render() {
    const style = {
      border: '3px solid green',
      padding: '50px',
    };

    return (
      <div style={style}>
        <TileGroup signalLights={this.props.signalLights} />
        <ControllComponent playSequence={this.props.playSequence.bind(this)} addNewToSequence={this.props.addNewToSequence.bind(this)} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  signalLights: state.signalLights,
  pattern: state.pattern,
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
};

export default connect(mapStateToProps, mapDispatchToProps)(MemitContainer);

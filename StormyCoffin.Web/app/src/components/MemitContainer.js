import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import TileGroup from './tileGroupComponent';
import ControllComponent from './controllComponent';

class MemitContainer extends Component {
  componentDidMount() {
    this.props.dispatch({ type: 'ADD_TILE_TO_SEQUENCE' });
  }

  playTile(i) {
    if (i < this.props.pattern.length) {
      this.props.dispatch({ type: 'ACTIVATE_TILE', payload: { id: this.props.pattern[i] } });
      setTimeout(() => {
        this.props.dispatch({ type: 'RESET_TILES' });
        setTimeout(() => { this.playTile(i + 1); }, 750);
      }, 375);
    }
  }

  playSequence() {
    this.playTile(0);
  }

  addNewToSequence() {
    this.props.dispatch({ type: 'ADD_TILE_TO_SEQUENCE' });
  }

  render() {
    return (
      <div>
        <TileGroup signalLights={this.props.signalLights} />
        <ControllComponent playSequence={this.playSequence.bind(this)} addNewToSequence={this.addNewToSequence.bind(this)} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  signalLights: state.signalLights,
  pattern: state.pattern,
});

MemitContainer.propTypes = {
  signalLights: PropTypes.array,
  dispatch: PropTypes.func,
  pattern: PropTypes.array,
};

export default connect(mapStateToProps)(MemitContainer);

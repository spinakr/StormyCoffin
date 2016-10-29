import React, { Component, PropTypes } from 'react';
import Tile from './tile';

class TileGroup extends Component {
  render() {
    return (
      <div>
        {this.props.signalLights.map((signal, index) => {
          return (
            <Tile color={signal.color} playing={signal.playing} key={index} />
          );
        })}
      </div>
    );
  }
}

TileGroup.propTypes = {
  signalLights: PropTypes.array,
};

export default TileGroup;

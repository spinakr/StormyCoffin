import React, { Component, PropTypes } from 'react';
import Tile from './tile';

class TileGroup extends Component {
  render() {
    if (this.props.hasLost){
      return (
        <div>
          <h1>YOU LOST</h1>
        </div>
      );
    }
    return (
      <div>
        {this.props.signalLights.map((signal, index) => {
          return (
            <Tile
              key={index}
              color={signal.color}
              playing={signal.playing}
              handleOnClick={() => this.props.handleTileClicked(index)}
            />
          );
        })}
      </div>
    );
  }
}

TileGroup.propTypes = {
  signalLights: PropTypes.array,
  handleTileClicked: PropTypes.func,
  hasLost: PropTypes.bool,
};

export default TileGroup;

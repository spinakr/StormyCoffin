import React, { Component, PropTypes } from 'react';
import Tile from './tile';
import { lost } from '../styles';

class TileGroup extends Component {
  render() {
    return (
      <div>
        {this.props.signalLights.map((signal, index) => {
          if (this.props.hasLost) {
            return (
              <Tile
                key={index}
                color={lost}
                playing={false}
                handleOnClick={() => {}}
              />
            );
          }
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

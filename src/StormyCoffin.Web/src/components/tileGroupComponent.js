import React, { PropTypes } from 'react';
import Tile from './tileComponent';
import { lost } from '../styles';

const tileGroup = ({ signalLights, handleTileClicked, hasLost }) => {
  return (
    <div>
      {signalLights.map((signal, index) => {
        if (hasLost) {
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
            handleOnClick={() => handleTileClicked(index)}
          />
        );
      })}
    </div>
  );
};

tileGroup.propTypes = {
  signalLights: PropTypes.array,
  handleTileClicked: PropTypes.func,
  hasLost: PropTypes.bool,
};

export default tileGroup;

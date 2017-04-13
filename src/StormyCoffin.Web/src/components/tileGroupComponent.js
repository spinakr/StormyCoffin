import React, { PropTypes } from 'react';
import Tile from './tileComponent';

const tileGroup = ({ tiles }) => {
  return (
    <div>
      {tiles.map((signal, index) => {
        return (
          <Tile
            key={index}
            color={signal.color}
            playing={signal.playing}
          />
        );
      })}
    </div>
  );
};

tileGroup.propTypes = {
  tiles: PropTypes.array,
};

export default tileGroup;

import React, { PropTypes } from 'react';
import Radium from 'radium';

const tile = ({ color, playing }) => {
  const style = [
    { margin: '10px' },
    color.base,
    playing ? color.active : '',
  ];
  return (
    <button style={style} />
  );
};

tile.propTypes = {
  color: PropTypes.object,
  playing: PropTypes.bool,
};

export default new Radium(tile);

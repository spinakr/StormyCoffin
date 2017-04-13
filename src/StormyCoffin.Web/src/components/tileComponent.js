import React, { PropTypes } from 'react';
import Radium from 'radium';

const tile = ({ color, playing, handleOnClick }) => {
  const style = [
    { margin: '10px' },
    color.base,
    playing ? color.active : '',
  ];
  return (
    <button style={style} onClick={handleOnClick} />
  );
};

tile.propTypes = {
  color: PropTypes.object,
  playing: PropTypes.bool,
  handleOnClick: PropTypes.func,
};

export default new Radium(tile);

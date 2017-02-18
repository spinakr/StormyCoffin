import React, { Component, PropTypes } from 'react';
import Radium from 'radium';

class Tile extends Component {
  render() {
    const style = [
      { margin: '10px' },
      this.props.color.base,
      this.props.playing ? this.props.color.active : '',
    ];
    return (
      <button style={style} />
    );
  }
}

Tile.propTypes = {
  color: PropTypes.object,
  playing: PropTypes.bool,
};

export default new Radium(Tile);

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
      <button style={style} onClick={this.props.handleOnClick} />
    );
  }
}

Tile.propTypes = {
  color: PropTypes.object,
  playing: PropTypes.bool,
  handleOnClick: PropTypes.func,
};

export default new Radium(Tile);

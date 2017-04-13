import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import TileGroup from '../components/tileGroupComponent';

const SequenceContainer = ({ tiles }) => {
  return (
    <div>
      <TileGroup
        tiles={tiles}
      />
    </div>
  );
};

const mapStateToProps = state => ({
  tiles: state.sequence.tiles,
});

SequenceContainer.propTypes = {
  tiles: PropTypes.array,
};

export default connect(mapStateToProps)(SequenceContainer);

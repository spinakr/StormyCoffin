import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import PlayerScore from '../components/playerScore';

const ScoreContainer = ({ patternLength }) => {
  const style = {
    border: '3px solid blue',
    padding: '25px',
    marginTop: '10px',
  };

  return (
    <div style={style}>
      <PlayerScore patternLength={patternLength} />
    </div>
  );
};

const mapStateToProps = state => ({
  patternLength: state.sequence.pattern.length,
});

ScoreContainer.propTypes = {
  patternLength: PropTypes.number,
};

export default connect(mapStateToProps)(ScoreContainer);

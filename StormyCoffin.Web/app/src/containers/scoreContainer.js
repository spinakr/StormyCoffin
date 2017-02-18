import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import PlayerScore from '../components/playerScore';

const ScoreContainer = ({ patternLength }) => {
  const style = {
    border: '3px solid blue',
    padding: '25px',
    marginTop: '50px',
  };

  return (
    <div style={style}>
      <PlayerScore patternLength={patternLength} />
    </div>
  );
};

const mapStateToProps = state => ({
  patternLength: state.pattern.length,
});

ScoreContainer.propTypes = {
  patternLength: PropTypes.number,
};

export default connect(mapStateToProps)(ScoreContainer);

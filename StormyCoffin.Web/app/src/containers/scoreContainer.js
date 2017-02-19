import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import PlayerScore from '../components/playerScore';

const ScoreContainer = ({ score }) => {
  const style = {
    border: '3px solid blue',
    padding: '25px',
    marginTop: '10px',
  };

  return (
    <div style={style}>
      <PlayerScore score={score} />
    </div>
  );
};

const mapStateToProps = state => ({
  score: Math.floor(state.score.score),
});

ScoreContainer.propTypes = {
  score: PropTypes.number,
};

export default connect(mapStateToProps)(ScoreContainer);

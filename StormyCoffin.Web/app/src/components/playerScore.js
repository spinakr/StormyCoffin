import React, { PropTypes } from 'react';

const playerScore = ({ patternLength }) => {
  return (
    <p>PlayerScore: {patternLength} </p>
  );
};

playerScore.propTypes = {
  patternLength: PropTypes.number,
};

export default playerScore;

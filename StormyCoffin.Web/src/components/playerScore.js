import React, { PropTypes } from 'react';

const playerScore = ({ score }) => {
  return (
    <p>PlayerScore: {score} </p>
  );
};

playerScore.propTypes = {
  score: PropTypes.number,
};

export default playerScore;

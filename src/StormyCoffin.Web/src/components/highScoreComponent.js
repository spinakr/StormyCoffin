import React, { PropTypes } from 'react';

const highScoreComponent = ({ scores }) => {
  return (
    <div>
      <h1>Highscores: </h1>
      {scores.map((s, index) => {
        return (<p key={index}>{s.userName}: {Math.max(...s.scores)}</p>);
      })}
    </div>
  );
};

highScoreComponent.propTypes = {
  scores: PropTypes.any,
};

export default highScoreComponent;

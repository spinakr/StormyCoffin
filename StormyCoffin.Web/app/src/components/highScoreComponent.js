import React, { PropTypes } from 'react';

const highScoreComponent = ({ scores }) => {
  return (
    <div>
      <h1>Highscores: </h1>
      {Object.keys(scores).map((s) => {
        return (<p key={s}>{s}: {scores[s]}</p>);
      })}
    </div>
  );
};

highScoreComponent.propTypes = {
  scores: PropTypes.object,
};

export default highScoreComponent;

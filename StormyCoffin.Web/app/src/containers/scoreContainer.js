import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PlayerScore from '../components/playerScore';
import EndScore from '../components/endScore';
import { gameStates } from '../modules/gameState';
import { submitScore } from '../modules/score';

const ScoreContainer = ({ score, endScoreModalActive, handleSubmit }) => {
  const style = {
    border: '3px solid blue',
    padding: '25px',
    marginTop: '10px',
  };

  return (
    <div>
      <div style={style}>
        <PlayerScore score={score.playerScore} />
      </div>
      <div>
        <EndScore
          modalActive={endScoreModalActive}
          score={score}
          handleSubmit={() => handleSubmit(score)}
        />
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  score: {
    playerScore: Math.floor(state.score.score),
    totalTimeSpentRecalling: state.score.totalTimeSpentRecalling,
    gameLevel: state.score.gameLevel,
  },
  endScoreModalActive: state.gameState.gameState === gameStates.PLAYER_LOST,
});

const mapDispatchToProps = (dispatch) => {
  return {
    handleSubmit: bindActionCreators(submitScore, dispatch),
  };
};

ScoreContainer.propTypes = {
  score: PropTypes.object,
  endScoreModalActive: PropTypes.bool,
  handleSubmit: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(ScoreContainer);

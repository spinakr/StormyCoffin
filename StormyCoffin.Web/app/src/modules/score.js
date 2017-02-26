import { RECALLING_SEQUENCE } from './gameState';
import submit from '../services/scoreService';

export const NEW_SCORE_GAINED = 'score/NEW_SCORE_GAINED';
export const SUBMIT_SCORE_STARTED = 'score/SUBMIT_SCORE_STARTED';
export const SUBMIT_SCORE_SUCCEED = 'score/SUBMIT_SCORE_SUCCEED';
export const SUBMIT_SCORE_FAILED = 'score/SUBMIT_SCORE_FAILED';

const scoreFunction = (sequenceLength, timeSpentRecalling) => {
  const sequenceFactor = sequenceLength * 10;
  const timeFactor = Math.max(0, Math.min(sequenceFactor, sequenceFactor - (timeSpentRecalling * 2)));

  return (sequenceFactor + (timeFactor / 2));
};

export default (state = { score: 0, totalTimeSpentRecalling: 0 }, action) => {
  switch (action.type) {
    case RECALLING_SEQUENCE: {
      return {
        ...state,
        startRecalling: new Date().getTime(),
      };
    }
    case NEW_SCORE_GAINED: {
      const sequenceLength = action.payload.sequenceLength;
      const timeSpentRecalling = (action.payload.finishedRecalling - state.startRecalling) / 1000;
      const roundScore = scoreFunction(sequenceLength, timeSpentRecalling);
      return {
        ...state,
        score: state.score + roundScore,
        totalTimeSpentRecalling: state.totalTimeSpentRecalling + timeSpentRecalling,
        gameLevel: sequenceLength,
      };
    }

    default:
      return state;
  }
};

export const submitScore = score => (dispatch) => {
  dispatch({ type: SUBMIT_SCORE_STARTED });
  submit(1, score).then(() => {
    dispatch({ type: SUBMIT_SCORE_SUCCEED });
  }).catch((errorMessage) => {
    console.log(errorMessage.message);
    dispatch({ type: SUBMIT_SCORE_FAILED, payload: { errorMessage: errorMessage.message } });
  });
};


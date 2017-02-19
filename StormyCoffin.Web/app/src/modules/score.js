import { RECALLING_SEQUENCE } from './gameState';

export const NEW_SCORE_GAINED = 'score/NEW_SCORE_GAINED';

const scoreFunction = (sequenceLength, timeSpentRecalling) => {
  const sequenceFactor = sequenceLength * 10;
  const timeFactor = Math.max(0, Math.min(sequenceFactor, sequenceFactor - (timeSpentRecalling * 2)));

  return (sequenceFactor + (timeFactor / 2));
};

export default (state = { score: 0 }, action) => {
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
      };
    }

    default:
      return state;
  }
};



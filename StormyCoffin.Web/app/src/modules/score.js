import { RECALLING_SEQUENCE } from './gameState';

export const NEW_SCORE_GAINED = 'score/NEW_SCORE_GAINED';

export default (state = { score: 0 }, action) => {
  switch (action.type) {
    case RECALLING_SEQUENCE: {
      return {
        ...state,
        startRecalling: new Date().getTime(),
      };
    }
    case NEW_SCORE_GAINED: {
      const timeSpentRecalling = (action.payload.finishedRecalling - state.startRecalling) / 1000;
      const newScore = state.score + (action.payload.sequenceLength - timeSpentRecalling);
      return {
        ...state,
        score: newScore,
      };
    }

    default:
      return state;
  }
};

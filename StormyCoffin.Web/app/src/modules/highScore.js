import { getScores } from '../services/scoreService';


export const GET_SCORE_STARTED = 'score/GET_SCORE_STARTED';
export const GET_SCORE_SUCCEED = 'score/GET_SCORE_SUCCEED';
export const GET_SCORE_FAILED = 'score/GET_SCORE_FAILED';


const initialState = {
  scores: {},
  isGettingScore: false,
};

export default (state = initialState, action) => {
  switch (action.type) {

    case GET_SCORE_STARTED: {
      return {
        ...state,
        isGettingScore: true,
      };
    }

    case GET_SCORE_SUCCEED: {
      return {
        ...state,
        scores: JSON.parse(action.payload.highScores),
        isGettingScore: false,
      };
    }

    case GET_SCORE_FAILED: {
      return {
        ...state,
        isGettingScore: false,
      };
    }

    default:
      return state;
  }
};

export const getHighScores = () => (dispatch) => {
  dispatch({ type: GET_SCORE_STARTED });
  getScores().then((highScores) => {
    dispatch({ type: GET_SCORE_SUCCEED, payload: { highScores } });
  }).catch((errorMessage) => {
    dispatch({ type: GET_SCORE_FAILED, payload: { errorMessage: errorMessage.message } });
  });
};


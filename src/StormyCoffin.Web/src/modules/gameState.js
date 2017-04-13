export const gameStates = {
  NEW_ROUND_INITIATED: 1,
  PLAYING_SEQUENCE: 2,
  RECALLING_SEQUENCE: 3,
};

// Actions
export const NEW_ROUND_INITIATED = 'gameState/NEW_ROUND_INITIATED';
export const PLAYING_SEQUENCE = 'gameState/PLAYING_SEQUENCE';
export const RECALLING_SEQUENCE = 'gameState/RECALLING_SEQUENCE';


// Reducer
export default (state = { gameState: gameStates.NEW_ROUND_INITIATED }, action) => {
  switch (action.type) {
    case NEW_ROUND_INITIATED: {
      return {
        ...state,
        gameState: gameStates.NEW_ROUND_INITIATED,
      };
    }
    case PLAYING_SEQUENCE: {
      return {
        ...state,
        gameState: gameStates.PLAYING_SEQUENCE,
      };
    }

    case RECALLING_SEQUENCE: {
      return {
        ...state,
        gameState: gameStates.RECALLING_SEQUENCE,
      };
    }

    default:
      return state;
  }
};


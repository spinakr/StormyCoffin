export const gameStates = {
  NEW_ROUND_INITIATED: 1,
  PLAYING_SEQUENCE: 2,
  RECALLING_SEQUENCE: 3,
  PLAYER_LOST: 4,
};

const setNewState = (state, gameState) => {
  return {
    ...state,
    gameState,
  };
};

export const NEW_ROUND_INITIATED = 'gameState/NEW_ROUND_INITIATED';
export const PLAYING_SEQUENCE = 'gameState/PLAYING_SEQUENCE';
export const RECALLING_SEQUENCE = 'gameState/RECALLING_SEQUENCE';
export const PLAYER_LOST = 'gameState/PLAYER_LOST';

export default (state = { gameState: gameStates.NEW_ROUND_INITIATED }, action) => {
  switch (action.type) {
    case NEW_ROUND_INITIATED: {
      return setNewState(state, gameStates.NEW_ROUND_INITIATED);
    }
    case PLAYING_SEQUENCE: {
      return setNewState(state, gameStates.PLAYING_SEQUENCE);
    }
    case RECALLING_SEQUENCE: {
      return setNewState(state, gameStates.RECALLING_SEQUENCE);
    }
    case PLAYER_LOST: {
      return setNewState(state, gameStates.PLAYER_LOST);
    }

    default:
      return state;
  }
};


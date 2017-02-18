export const gameStates = {
  INITIAL: 1,
  PLAYING_SEQUENCE: 2,
  RECALLING_SQUENCE: 3,
  LOST: 4,
};

export const GAME_STATE_CHANGED = 'stormyCoffin/gameState/GAME_STATE_CHANGED';

export default (state = { gameState: gameStates.INITIAL }, action) => {
  switch (action.type) {
    case GAME_STATE_CHANGED: {
      const newGameState = Object.values(gameStates).find((s) => {
        if (s === action.payload.newState) {
          return true;
        }
        return false;
      });

      return {
        ...state,
        gameState: newGameState,
      };
    }

    default:
      return state;
  }
};

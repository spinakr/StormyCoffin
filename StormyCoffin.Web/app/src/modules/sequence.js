import { blue, red, green, yellow } from '../styles';
import { GAME_STATE_CHANGED, gameStates } from './gameState';

const initialState = {
  signalLights: [
    { color: red, playing: false },
    { color: green, playing: false },
    { color: yellow, playing: false },
    { color: blue, playing: false },
  ],
  pattern: [0],
  patternRecalled: [],
};

const ADD_TILE_TO_SEQUENCE = 'stormyCoffin/sequence/ADD_TILE_TO_SEQUENCE';
const RESET_TILES = 'stormyCoffin/sequence/RESET_TILES';
const ACTIVATE_TILE = 'stormyCoffin/sequence/ACTIVATE_TILE';
const TILE_CLICKED = 'stormyCoffin/sequence/TILE_CLICKED';

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TILE_TO_SEQUENCE: {
      const randomTile = Math.floor(Math.random() * initialState.signalLights.length);
      return {
        ...state,
        pattern: [...state.pattern, randomTile],
      };
    }

    case ACTIVATE_TILE:
      return {
        ...state,
        signalLights: state.signalLights.map((item, index) => {
          if (action.payload.id === index) {
            return {
              ...item,
              playing: true };
          }
          return item;
        }),
      };

    case RESET_TILES:
      return {
        ...state,
        signalLights: state.signalLights.map((item) => {
          return {
            ...item,
            playing: false,
          };
        }),
      };

    case TILE_CLICKED: {
      const newRecalledSequence = [...state.patternRecalled, action.payload.tileIndex];
      return {
        ...state,
        patternRecalled: newRecalledSequence,
      };
    }

    default:
      return state;
  }
};

export const playSequence = () => (dispatch, getState) => {
  const timeBetweenTiles = 1100;
  const timeActive = 400;
  const { pattern } = getState().sequence;

  dispatch({
    type: GAME_STATE_CHANGED,
    payload: {
      newState: gameStates.PLAYING_SEQUENCE,
    },
  });

  for (let i = 0; i < pattern.length; i += 1) {
    const activationTime = timeBetweenTiles * i;
    const deactivationTime = activationTime + timeActive;

    setTimeout(() => {
      dispatch({ type: ACTIVATE_TILE, payload: { id: pattern[i] } });
    }, activationTime);
    setTimeout(() => {
      dispatch({ type: RESET_TILES, payload: { id: pattern[i] } });
    }, deactivationTime);
  }

  const doneTime = timeBetweenTiles * pattern.length;
  setTimeout(() => {
    dispatch({
      type: GAME_STATE_CHANGED,
      payload: { newState: gameStates.RECALLING_SQUENCE },
    });
  }, doneTime);
};

export const addNewToSequence = () => {
  return { type: ADD_TILE_TO_SEQUENCE };
};

export const tileClicked = tileIndex => (dispatch, getState) => {
  dispatch({
    type: TILE_CLICKED,
    payload: {
      tileIndex,
      //TODO: add timeused ??
    },
  });

  const { pattern, patternRecalled } = getState().sequence;

  for (let i = 0; i < patternRecalled.length; i += 1) {
    if (patternRecalled[i] !== pattern[i]) {
      dispatch({
        type: GAME_STATE_CHANGED,
        payload: { newState: gameStates.LOST } });
    }
  }
};

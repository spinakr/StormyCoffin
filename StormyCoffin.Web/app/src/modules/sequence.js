import { blue, red, green, yellow } from '../styles';
import { PLAYING_SEQUENCE, RECALLING_SEQUENCE, PLAYER_LOST, NEW_ROUND_INITIATED } from './gameState';
import { NEW_SCORE_GAINED } from './score';

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

const ADD_TILE_TO_SEQUENCE = 'sequence/ADD_TILE_TO_SEQUENCE';
const RESET_TILES = 'sequence/RESET_TILES';
const ACTIVATE_TILE = 'sequence/ACTIVATE_TILE';
const TILE_CLICKED = 'sequence/TILE_CLICKED';

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TILE_TO_SEQUENCE: {
      const randomTile = Math.floor(Math.random() * initialState.signalLights.length);
      return {
        ...state,
        pattern: [...state.pattern, randomTile],
        patternRecalled: [],
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
    type: PLAYING_SEQUENCE,
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
      type: RECALLING_SEQUENCE,
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
    },
  });

  const { pattern, patternRecalled } = getState().sequence;
  for (let i = 0; i < patternRecalled.length; i += 1) {
    if (patternRecalled[i] !== pattern[i]) {
      dispatch({
        type: PLAYER_LOST,
      });
      return;
    }
  }

  if (patternRecalled.length === pattern.length) {
    dispatch({
      type: NEW_ROUND_INITIATED,
    });
    dispatch({
      type: ADD_TILE_TO_SEQUENCE,
    });
    dispatch({
      type: NEW_SCORE_GAINED,
      payload: {
        sequenceLength: patternRecalled.length,
        finishedRecalling: new Date().getTime(),
      },
    });
  }
};

import { blue, red, green, yellow } from '../styles';
import { PLAYING_SEQUENCE, RECALLING_SEQUENCE } from './gameState';

const initialState = {
  tiles: [
    { color: red, playing: false },
    { color: green, playing: false },
    { color: yellow, playing: false },
    { color: blue, playing: false },
  ],
  pattern: [1],
  patternRecalled: [],
};


// Actions
const ADD_TILE_TO_SEQUENCE = 'sequence/ADD_TILE_TO_SEQUENCE';
const RESET_TILES = 'sequence/RESET_TILES';
const ACTIVATE_TILE = 'sequence/ACTIVATE_TILE';


// Reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TILE_TO_SEQUENCE: {
      const randomTile = Math.floor(Math.random() * initialState.tiles.length);
      return {
        ...state,
        pattern: [...state.pattern, randomTile],
        patternRecalled: [],
      };
    }

    case ACTIVATE_TILE:
      return {
        ...state,
        tiles: state.tiles.map((item, index) => {
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
        tiles: state.tiles.map((item) => {
          return {
            ...item,
            playing: false,
          };
        }),
      };

    default:
      return state;
  }
};


// Action creators
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

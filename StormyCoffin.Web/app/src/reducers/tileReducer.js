import { blue, red, green, yellow } from '../styles';

const initialState = {
  signalLights: [
    { color: red, playing: false },
    { color: green, playing: false },
    { color: yellow, playing: false },
    { color: blue, playing: false },
  ],
  pattern: [0],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TILE_TO_SEQUENCE': {
      const randomTile = Math.floor(Math.random() * initialState.signalLights.length);
      return Object.assign({}, state, {
        pattern: [...state.pattern, randomTile],
      });
    }

    case 'RESET_TILES':
      return Object.assign({}, state, {
        signalLights: state.signalLights.map((item) => {
          return Object.assign({}, item, { playing: false });
        }),
      });

    case 'ACTIVATE_TILE':
      return Object.assign({}, state, {
        signalLights: state.signalLights.map((item, index) => {
          if (action.payload.id === index) {
            return Object.assign({}, item, { playing: true });
          }
          return item;
        }),
      });

    default:
      return state;
  }
};

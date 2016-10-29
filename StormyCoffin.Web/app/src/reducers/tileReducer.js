import { blue, red, green, yellow } from './tileStyles';

const initialState = {
  signalLights: [
    { color: red, playing: false },
    { color: green, playing: false },
    { color: yellow, playing: false },
    { color: blue, playing: false },
  ],
  pattern: [0, 0, 1, 1, 2, 2, 3, 1],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'RESET_TILES':
      return Object.assign({}, initialState);

    case 'ACTIVATE_TILE':
      return Object.assign({}, initialState, {
        signalLights: initialState.signalLights.map((item, index) => {
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

const initialState = {
  items: [],
  newItem: { name: '' },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'NEW_ITEM_ADDED':
      console.log(state.items);
      console.log(action);
      return Object.assign({}, state, {
        items: [...state.items, action.payload.newItem],
      });

    case 'ITEM_INPUT_NAME_CHANGED':
      return Object.assign({}, state, {
        newItem: Object.assign({}, state, {
          name: action.payload.name,
        }),
      });

    default:
      return state;
  }
};

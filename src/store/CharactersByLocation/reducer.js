const initialState = null;

export default (state = initialState, action) => {
  switch (action.type) {
    case "locationPage/charactersLoaded": {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

const initialState = null;

export default (state = initialState, action) => {
  switch (action.type) {
    case "episodesPage/episodesLoaded": {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

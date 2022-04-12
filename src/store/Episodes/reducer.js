/* eslint-disable import/no-anonymous-default-export */
const initialState = null;

export default (state = initialState, action) => {
  switch (action.type) {
    case "episodesPage/episodesLoaded": {
      return {};
    }
    default: {
      return state;
    }
  }
};

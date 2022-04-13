/* eslint-disable import/no-anonymous-default-export */
const initialState = {
  episodes: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "episodePage/charactersLoaded": {
      const filterByEpisode = action.payload;

      const charactersByEpisodeAlive = filterByEpisode?.characters?.filter(
        (char) => {
          return char.status === "Alive";
        }
      );
      return { ...state, charactersByEpisodeAlive };
    }
    default: {
      return state;
    }
  }
};

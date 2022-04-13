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

    case "episodePage/episodesLoaded": {
      const episodes = action.payload;
      return { ...state, episodes: episodes };
    }
    default: {
      return state;
    }
  }
};

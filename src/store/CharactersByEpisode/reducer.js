/* eslint-disable import/no-anonymous-default-export */
const initialState = null;

export default (state = initialState, action) => {
  switch (action.type) {
    case "episodePage/charactersLoaded": {
      const filterByEpisode = action.payload;

      const episodeName = action.payload.name;

      const charactersByEpisodeAlive = filterByEpisode?.characters?.filter(
        (char) => {
          return char.status === "Alive";
        }
      );
      return { episode: episodeName, charactersByEpisodeAlive };
    }
    default: {
      return state;
    }
  }
};

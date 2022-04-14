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
      const charactersByEpisodeAliveLastSeen = charactersByEpisodeAlive.map(
        (character) => {
          const checkCharacterEpisodes = character.episode.reduce(
            (prev, current) => {
              return prev.created > current.created ? prev : current;
            }
          );

          return { ...character, episode: checkCharacterEpisodes };
        }
      );

      return { ...state, charactersByEpisodeAliveLastSeen };
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

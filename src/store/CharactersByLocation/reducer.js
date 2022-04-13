/* eslint-disable import/no-anonymous-default-export */
const initialState = {
  locations: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "locationPage/charactersLoaded": {
      const filterByLocation = action.payload;

      const charactersByLocation = filterByLocation?.map((character) => {
        return character?.residents?.filter(
          (resident) => resident.status === "Alive"
        );
      });
      const charactersByLocationAlive = charactersByLocation.flat();

      const charactersByLocationAliveLastSeen = charactersByLocationAlive.map(
        (character) => {
          const checkCharacterEpisodes = character.episode.reduce(
            (prev, current) => {
              return prev.created > current.created ? prev : current;
            }
          );

          return { ...character, episode: checkCharacterEpisodes };
        }
      );

      return {
        ...state,
        charactersByLocationAliveLastSeen,
      };
    }
    case "locationPage/locationsLoaded": {
      return { ...state, locations: action.payload };
    }
    default: {
      return state;
    }
  }
};

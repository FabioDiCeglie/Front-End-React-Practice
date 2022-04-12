/* eslint-disable import/no-anonymous-default-export */
const initialState = null;

export default (state = initialState, action) => {
  switch (action.type) {
    case "locationPage/charactersLoaded": {
      const filterByLocation = action.payload;
      const locationName = filterByLocation.map((location) => {
        return location.name;
      });

      const charactersByLocation = filterByLocation?.map((character) => {
        return character?.residents?.filter(
          (resident) => resident.status === "Alive"
        );
      });
      const charactersByLocationAlive = charactersByLocation.flat();

      const charactersByLocationAliveLastSeen = charactersByLocationAlive.map(
        (character) => {
          const checkCharacterEpisodes = character.episode.reduce(function (
            prev,
            current
          ) {
            return prev.created > current.created ? prev : current;
          });

          return { ...character, episode: checkCharacterEpisodes };
        }
      );

      return { location: locationName, charactersByLocationAliveLastSeen };
    }
    default: {
      return state;
    }
  }
};

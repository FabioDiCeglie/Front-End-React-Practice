const initialState = {
  dimensions: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "charactersPage/charactersLoaded": {
      const filterByDimension = action.payload;

      const charactersByDimension = filterByDimension?.map((character) => {
        return character?.residents?.filter(
          (resident) => resident.status === "Alive"
        );
      });
      const charactersByDimensionAlive = charactersByDimension.flat();

      const charactersByDimensionAliveLastSeen = charactersByDimensionAlive.map(
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

      return { ...state, charactersByDimensionAliveLastSeen };
    }
    case "dimensionPage/dimensionsLoaded": {
      const dimensions = action.payload;
      const filterDimensions = dimensions.filter(
        (dimension) => dimension.dimension !== "unknown"
      );

      return {
        ...state,
        dimensions: filterDimensions,
      };
    }
    default: {
      return state;
    }
  }
};

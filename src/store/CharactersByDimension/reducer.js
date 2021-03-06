/* eslint-disable import/no-anonymous-default-export */
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
          const checkCharacterEpisodes = character.episode.reduce(
            (prev, current) => {
              return prev.created > current.created ? prev : current;
            }
          );

          return { ...character, episode: checkCharacterEpisodes };
        }
      );

      return { ...state, charactersByDimensionAliveLastSeen };
    }
    case "dimensionPage/dimensionsLoaded": {
      const dimensions = action.payload;
      const filterDimensions = dimensions.filter((dimension) => {
        return dimension.dimension !== "unknown";
      });

      const dimensionsUnique = [
        ...new Set(filterDimensions.map((tag) => tag.dimension)),
      ];

      return {
        ...state,
        dimensions: dimensionsUnique,
      };
    }
    default: {
      return state;
    }
  }
};

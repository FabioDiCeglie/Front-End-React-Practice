const initialState = null;

export default (state = initialState, action) => {
  switch (action.type) {
    case "charactersPage/charactersLoaded": {
      const filterByDimension = action.payload;

      const dimensionName = filterByDimension.map((dimension) => {
        return dimension.dimension;
      });
      const uniqueName = Array.from(new Set(dimensionName));

      const charactersByDimension = filterByDimension?.map((character) => {
        return character?.residents?.filter(
          (resident) => resident.status === "Alive"
        );
      });
      const charactersByDimensionAlive = charactersByDimension.flat();

      return { dimension: uniqueName, charactersByDimensionAlive };
    }
    default: {
      return state;
    }
  }
};

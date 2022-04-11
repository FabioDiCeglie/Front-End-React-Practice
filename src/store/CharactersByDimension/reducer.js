const initialState = null;

export default (state = initialState, action) => {
  switch (action.type) {
    case "charactersPage/charactersLoaded": {
      const filterByDimension = action.payload;
      const charactersByDimensionAlive = filterByDimension?.map((character) => {
        return character?.residents?.filter(
          (resident) => resident.status === "Alive"
        );
      });
      return charactersByDimensionAlive.flat();
    }
    default: {
      return state;
    }
  }
};

const initialState = null;

export default (state = initialState, action) => {
  switch (action.type) {
    case "locationPage/charactersLoaded": {
      const filterByLocation = action.payload;
      const charactersByLocationAlive = filterByLocation?.map((character) => {
        return character?.residents?.filter(
          (resident) => resident.status === "Alive"
        );
      });
      const charactersByLocation = charactersByLocationAlive.flat();

      return charactersByLocation;
    }
    default: {
      return state;
    }
  }
};

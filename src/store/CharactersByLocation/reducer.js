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

      return { location: locationName, charactersByLocationAlive };
    }
    default: {
      return state;
    }
  }
};

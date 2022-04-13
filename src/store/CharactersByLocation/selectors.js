export const selectCharactersByLocation = (reduxState) =>
  reduxState.charactersByLocation.charactersByLocationAliveLastSeen;

export const selectLocations = (reduxState) =>
  reduxState.charactersByLocation.locations;

export const selectCharactersByDimension = (reduxState) =>
  reduxState.charactersByDimension.charactersByDimensionAliveLastSeen;

export const selectDimensions = (reduxState) =>
  reduxState.charactersByDimension.dimensions;

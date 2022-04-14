export const selectCharactersByEpisode = (reduxState) =>
  reduxState.charactersByEpisode.charactersByEpisodeAliveLastSeen;

export const selectEpisodes = (reduxState) =>
  reduxState.charactersByEpisode.episodes;

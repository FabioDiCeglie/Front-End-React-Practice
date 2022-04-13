export const selectCharactersByEpisode = (reduxState) =>
  reduxState.charactersByEpisode.charactersByEpisodeAlive;

export const selectEpisodes = (reduxState) =>
  reduxState.charactersByEpisode.episodes;

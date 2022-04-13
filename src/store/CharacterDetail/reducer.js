/* eslint-disable import/no-anonymous-default-export */
const initialState = null;

export default (state = initialState, action) => {
  switch (action.type) {
    case "characterDetailPage/characterLoaded": {
      const characterDetail = action.payload;

      const lastSeenEpisode = characterDetail.episode.reduce(
        (prev, current) => {
          return prev.created > current.created ? prev : current;
        }
      );

      return { ...characterDetail, episode: lastSeenEpisode };
    }
    default: {
      return state;
    }
  }
};

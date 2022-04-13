import axios from "axios";
import {
  apiUrlGraphQl,
  getCharactersByEpisodes,
  getEpisodes,
} from "../../config/apiClient";

const charactersLoaded = (data) => ({
  type: "episodePage/charactersLoaded",
  payload: data,
});

export const fetchCharacters = (episode) => {
  return async (dispatch) => {
    try {
      const responseGraphQL = await axios.post(`${apiUrlGraphQl}`, {
        query: getCharactersByEpisodes(episode),
      });

      const result = responseGraphQL.data.data.episode;

      if (result === null) {
        throw new Error("Failed to load products from the API");
      } else {
        dispatch(charactersLoaded(result));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

const episodesLoaded = (data) => ({
  type: "episodePage/episodesLoaded",
  payload: data,
});

export const fetchEpisodes = () => {
  return async (dispatch) => {
    try {
      const responseGraphQL = await axios.post(`${apiUrlGraphQl}`, {
        query: getEpisodes,
      });

      const result = responseGraphQL.data.data.episodes.results;

      if (result === null) {
        throw new Error("Failed to load products from the API");
      } else {
        dispatch(episodesLoaded(result));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

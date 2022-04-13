import axios from "axios";
import { apiUrlGraphQl, getAllEpisodes } from "../../config/apiClient";

const episodesLoaded = (data) => ({
  type: "episodesPage/episodesLoaded",
  payload: data,
});

export const fetchEpisodes = (pageNumber) => {
  return async (dispatch) => {
    try {
      const responseGraphQL = await axios.post(`${apiUrlGraphQl}`, {
        query: getAllEpisodes(pageNumber),
      });

      const result = responseGraphQL.data.data;

      if (result === null) {
        throw new Error("Failed to load products from the API");
      } else {
        dispatch(episodesLoaded(result.episodes));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

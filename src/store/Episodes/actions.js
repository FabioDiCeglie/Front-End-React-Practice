import axios from "axios";
import { apiUrlGraphQl } from "../../config/apiClient";

const episodesLoaded = (data) => ({
  type: "episodesPage/episodesLoaded",
  payload: data,
});

export const fetchEpisodes = () => {
  return async (dispatch) => {
    const GET_EPISODES_QUERY = `query 
{episodes(page:1)
{
results{id,name,episode,air_date}}}
`;
    try {
      const responseGraphQL = await axios.post(`${apiUrlGraphQl}`, {
        query: GET_EPISODES_QUERY,
      });

      const result = responseGraphQL.data.data;

      if (result === null) {
        throw new Error("Failed to load products from the API");
      } else {
        dispatch(episodesLoaded(result.episodes.results));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

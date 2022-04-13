import axios from "axios";
import { apiUrlGraphQl } from "../../config/apiClient";

const charactersLoaded = (data) => ({
  type: "episodePage/charactersLoaded",
  payload: data,
});

export const fetchCharacters = () => {
  return async (dispatch) => {
    const GET_CHARACTERS_QUERY_BY_EPISODE = `query 
    {episode (id: 22) 
    {id,name,characters {id,name,status,species,gender,image,location {id,name}}}}
    `;
    try {
      const responseGraphQL = await axios.post(`${apiUrlGraphQl}`, {
        query: GET_CHARACTERS_QUERY_BY_EPISODE,
      });

      const result = responseGraphQL.data.data;

      if (result === null) {
        throw new Error("Failed to load products from the API");
      } else {
        dispatch(charactersLoaded(result.episode));
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
    const GET_EPISODES = `query 
    {episodes{
      results{
       name
      }
    } }`;
    try {
      const responseGraphQL = await axios.post(`${apiUrlGraphQl}`, {
        query: GET_EPISODES,
      });

      const result = responseGraphQL.data.data;

      if (result === null) {
        throw new Error("Failed to load products from the API");
      } else {
        dispatch(episodesLoaded(result.locations.results));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

import axios from "axios";
import { apiUrlGraphQl } from "../../config/apiClient";

const GET_CHARACTERS_QUERY = `query 
{locations (filter: {dimension:"Fantasy Dimension"}) 
{results {name, type,dimension residents {name,status,species}}}}`;

const charactersLoaded = (data) => ({
  type: "homepage/charactersLoaded",
  payload: data,
});

export const fetchCharacters = () => {
  return async (dispatch) => {
    try {
      const responseGraphQL = await axios.post(`${apiUrlGraphQl}`, {
        query: GET_CHARACTERS_QUERY,
      });

      const result = responseGraphQL.data.data;

      if (result === null) {
        throw new Error("Failed to load products from the API");
      } else {
        dispatch(charactersLoaded(result.locations.results));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

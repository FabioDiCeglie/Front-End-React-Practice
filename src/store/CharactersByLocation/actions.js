import axios from "axios";
import { apiUrlGraphQl } from "../../config/apiClient";

const GET_CHARACTERS_QUERY_BY_LOCATION = `query 
{locations (filter: {name:"Citadel of Ricks"}) 
{results {name,residents {id,name,status,species,gender,image,episode{id,name,created}}}}}`;

const charactersLoaded = (data) => ({
  type: "locationPage/charactersLoaded",
  payload: data,
});

export const fetchCharacters = () => {
  return async (dispatch) => {
    try {
      const responseGraphQL = await axios.post(`${apiUrlGraphQl}`, {
        query: GET_CHARACTERS_QUERY_BY_LOCATION,
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

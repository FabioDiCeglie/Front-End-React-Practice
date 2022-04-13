import axios from "axios";
import { apiUrlGraphQl } from "../../config/apiClient";

const charactersLoaded = (data) => ({
  type: "locationPage/charactersLoaded",
  payload: data,
});

export const fetchCharacters = (location) => {
  return async (dispatch) => {
    const GET_CHARACTERS_QUERY_BY_LOCATION = `query 
    {locations (filter: {name:"${location}"}) 
    {results {name,residents {id,name,status,species,gender,image,episode{id,name,created}}}}}`;
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

const locationsLoaded = (data) => ({
  type: "locationPage/locationsLoaded",
  payload: data,
});

export const fetchLocations = () => {
  return async (dispatch) => {
    const GET_LOCATIONS = `query 
    {locations{
      results{
        name
      }
    } }`;
    try {
      const responseGraphQL = await axios.post(`${apiUrlGraphQl}`, {
        query: GET_LOCATIONS,
      });

      const result = responseGraphQL.data.data;

      if (result === null) {
        throw new Error("Failed to load products from the API");
      } else {
        dispatch(locationsLoaded(result.locations.results));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

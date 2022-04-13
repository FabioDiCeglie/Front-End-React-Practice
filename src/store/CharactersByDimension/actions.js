import axios from "axios";
import { apiUrlGraphQl } from "../../config/apiClient";

const charactersLoaded = (data) => ({
  type: "charactersPage/charactersLoaded",
  payload: data,
});

export const fetchCharacters = (dimension) => {
  return async (dispatch) => {
    const GET_CHARACTERS_QUERY_BY_DIMENSION = `query 
    {locations (filter: {dimension:"${dimension}"}) 
    {results {dimension residents {id,name,status,species,gender,image, location {id,name}, episode{id,name,created}}}}}`;
    try {
      const responseGraphQL = await axios.post(`${apiUrlGraphQl}`, {
        query: GET_CHARACTERS_QUERY_BY_DIMENSION,
      });

      const result = responseGraphQL.data.data.locations.results;

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

const dimensionsLoaded = (data) => ({
  type: "dimensionPage/dimensionsLoaded",
  payload: data,
});

export const fetchDimensions = () => {
  return async (dispatch) => {
    const GET_DIMENSIONS = `query 
    {locations{
      results{
        dimension
      }
    } }`;
    try {
      const responseGraphQL = await axios.post(`${apiUrlGraphQl}`, {
        query: GET_DIMENSIONS,
      });

      const result = responseGraphQL.data.data.locations.results;

      if (result === null) {
        throw new Error("Failed to load products from the API");
      } else {
        dispatch(dimensionsLoaded(result));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

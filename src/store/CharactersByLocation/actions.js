import axios from "axios";
import {
  apiUrlGraphQl,
  getCharactersByLocations,
  getLocations,
} from "../../config/apiClient";

const charactersLoaded = (data) => ({
  type: "locationPage/charactersLoaded",
  payload: data,
});

export const fetchCharacters = (location) => {
  return async (dispatch) => {
    try {
      const responseGraphQL = await axios.post(`${apiUrlGraphQl}`, {
        query: getCharactersByLocations(location),
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

const locationsLoaded = (data) => ({
  type: "locationPage/locationsLoaded",
  payload: data,
});

export const fetchLocations = () => {
  return async (dispatch) => {
    try {
      const responseGraphQL = await axios.post(`${apiUrlGraphQl}`, {
        query: getLocations,
      });

      const result = responseGraphQL.data.data.locations.results;

      if (result === null) {
        throw new Error("Failed to load products from the API");
      } else {
        dispatch(locationsLoaded(result));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

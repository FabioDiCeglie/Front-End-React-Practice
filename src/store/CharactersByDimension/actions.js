import axios from "axios";
import {
  apiUrlGraphQl,
  getCharactersByDimensions,
  getDimensions,
} from "../../config/apiClient";

const charactersLoaded = (data) => ({
  type: "charactersPage/charactersLoaded",
  payload: data,
});

export const fetchCharacters = (dimension) => {
  return async (dispatch) => {
    try {
      const responseGraphQL = await axios.post(`${apiUrlGraphQl}`, {
        query: getCharactersByDimensions(dimension),
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
    try {
      const responseGraphQL = await axios.post(`${apiUrlGraphQl}`, {
        query: getDimensions,
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

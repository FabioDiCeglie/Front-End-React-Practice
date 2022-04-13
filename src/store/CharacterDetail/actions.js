import axios from "axios";
import { apiUrlGraphQl, getDetailCharacter } from "../../config/apiClient";

const characterLoaded = (data) => ({
  type: "characterDetailPage/characterLoaded",
  payload: data,
});

export const fetchCharacter = (id) => {
  return async (dispatch) => {
    try {
      const responseGraphQL = await axios.post(`${apiUrlGraphQl}`, {
        query: getDetailCharacter(id),
      });

      const result = responseGraphQL.data.data.character;

      if (result === null) {
        throw new Error("Failed to load products from the API");
      } else {
        dispatch(characterLoaded(result));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

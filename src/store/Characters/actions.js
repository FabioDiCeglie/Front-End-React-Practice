import axios from "axios";
import { apiUrl } from "../../config/apiClient";

// const charactersLoaded = (data) => ({
//   type: "homepage/charactersLoaded",
//   payload: data,
// });

export const fetchCharacters = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `${apiUrl}/location/?dimension=Fantasy dimension`
      );
      console.log(response.data);

      if (response === null) {
        throw new Error("Failed to load products from the API");
      } else {
        // dispatch(charactersLoaded(response));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

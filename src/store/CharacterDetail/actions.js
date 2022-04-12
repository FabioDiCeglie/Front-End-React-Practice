import axios from "axios";
import { apiUrlGraphQl } from "../../config/apiClient";

const characterLoaded = (data) => ({
  type: "characterDetailPage/characterLoaded",
  payload: data,
});

export const fetchCharacter = (id) => {
  return async (dispatch) => {
    const GET_CHARACTERS_QUERY_BY_ID = `query 
    {character (id: ${id}) 
    {id,name,status,species,gender,origin {id,name}location {id,name}, episode{id,name,created}}}
    `;
    try {
      const responseGraphQL = await axios.post(`${apiUrlGraphQl}`, {
        query: GET_CHARACTERS_QUERY_BY_ID,
      });

      const result = responseGraphQL.data.data;
      console.log(result);

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

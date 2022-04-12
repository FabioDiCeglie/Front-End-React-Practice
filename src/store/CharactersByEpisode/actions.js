import axios from "axios";
import { apiUrlGraphQl } from "../../config/apiClient";

const GET_CHARACTERS_QUERY_BY_EPISODE = `query 
{episode (id: 28) 
{id,name,characters {id,name,status,species,gender,location {id,name}}}}
`;

const charactersLoaded = (data) => ({
  type: "episodePage/charactersLoaded",
  payload: data,
});

export const fetchCharacters = () => {
  return async (dispatch) => {
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

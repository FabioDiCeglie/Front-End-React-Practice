import { combineReducers } from "redux";
import charactersReducer from "./CharactersByDimension/reducer";

export default combineReducers({
  charactersByDimension: charactersReducer,
});

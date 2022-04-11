import { combineReducers } from "redux";
import charactersByDimensionReducer from "./CharactersByDimension/reducer";
import charactersByLocationReducer from "./CharactersByLocation/reducer";

export default combineReducers({
  charactersByDimension: charactersByDimensionReducer,
  charactersByLocation: charactersByLocationReducer,
});

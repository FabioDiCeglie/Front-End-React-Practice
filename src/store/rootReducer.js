import { combineReducers } from "redux";
import charactersByDimensionReducer from "./CharactersByDimension/reducer";
import charactersByLocationReducer from "./CharactersByLocation/reducer";
import charactersByEpisodeReducer from "./CharactersByEpisode/reducer";

export default combineReducers({
  charactersByDimension: charactersByDimensionReducer,
  charactersByLocation: charactersByLocationReducer,
  charactersByEpisode: charactersByEpisodeReducer,
});

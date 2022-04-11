import { combineReducers } from "redux";
import charactersReducer from "./Characters/reducer";

export default combineReducers({
  characters: charactersReducer,
});

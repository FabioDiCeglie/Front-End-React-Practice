import { combineReducers } from "redux";
import charactersReducer from "../store/Characters/reducer";

export default combineReducers({
  characters: charactersReducer,
});

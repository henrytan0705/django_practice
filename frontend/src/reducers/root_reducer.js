import { combineReducers } from "redux";
import movies from "./movies_reducer";
import errors from "./errors_reducer";
import auth from "./auth_reducer";

export default combineReducers({
  movies,
  errors,
  auth
});

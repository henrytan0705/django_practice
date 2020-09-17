import axios from "axios";
import { GET_MOVIES } from "./types";

export const getMovies = () => dispatch => {
  axios
    .get("/api/movies/")
    .then(res => {
      dispatch({
        type: GET_MOVIES,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

import axios from "axios";
import { GET_MOVIES, ADD_MOVIE } from "./types";
import { createMessage, returnErrors } from "./messages_actions";
// import { tokenConfig } from "./auth";

export const getMovies = () => (dispatch, getState) => {
  axios
    .get(
      "/api/movies/"
      // tokenConfig(getState)
    )
    .then(res => {
      dispatch({
        type: GET_MOVIES,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const addMovie = lead => (dispatch, getState) => {
  axios
    .post(
      "/api/movies/",
      lead
      // tokenConfig(getState)
    )
    .then(res => {
      dispatch(createMessage({ addMovie: "Movie Added" }));
      dispatch({
        type: ADD_MOVIE,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

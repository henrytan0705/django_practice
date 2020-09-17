import { GET_MOVIES } from "../actions/types";

const initialState = {
  movies: []
};

const moviesReducer = (state = initialState, action) => {
  Object.freeze(initialState);

  switch (action.type) {
    case GET_MOVIES:
      return {
        ...state,
        movies: action.payload
      };
    default:
      return state;
  }
};

export default moviesReducer;

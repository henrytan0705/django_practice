import axios from "axios";
import { returnErrors } from "./messages_actions";

import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_SUCCESS,
  REGISTER_FAIL
} from "./types";

// Get User
export const loadUser = () => (dispatch, getState) => {
  dispatch({ type: USER_LOADING });

  const token = getState().auth.token;

  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  if (token) {
    config.headers["Authorization"] = `Token ${token}`;
  }

  axios
    .get("/api/auth/user", config)
    .then(res => {
      dispatch({
        type: USER_LOADED,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: AUTH_ERROR
      });
    });
};

// Login User

export const login = (username, email, password) => dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  const body = JSON.stringify({ username, email, password });

  axios.post("/api/auth/login", body, config).then(res => {
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    }).catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: LOGIN_FAIL
      });
    });
  });
};

// Register User

export const register = (username, email, password) => dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  const body = JSON.stringify({ username, email, password });

  axios.post("/api/auth/register", body, config).then(res => {
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    }).catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: REGISTER_FAIL
      });
    });
  });
};

// Logout User

export const logout = () => dispatch => {};

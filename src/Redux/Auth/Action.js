import axios from "axios";

import {
  GET_USER_FAILURE,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  REGISTER_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
} from "./ActionTypes";

import { API_BASE_URL } from "@/config/api";

const registerRequest = () => ({ type: REGISTER_REQUEST });
const registerSuccess = () => ({ type: REGISTER_SUCCESS, payload: user });
const registerFailure = () => ({ type: REGISTER_FAILURE, payload: error });

export const registerUser = (userData) => async (dispatch) => {
  dispatch(registerRequest());
  try {
    const response = await axios.post(`${API_BASE_URL}/sign-up`, userData);
    const user = response.data;
    if (user.access_token)
      localStorage.setItem("access_token", user.access_token);
    console.log("register: ", user);
    dispatch(registerSuccess(user));
  } catch (error) {
    dispatch(registerFailure(error.message));
  }
};

const loginRequest = () => ({ type: LOGIN_REQUEST });
const loginSuccess = () => ({ type: LOGIN_SUCCESS, payload: user });
const loginFailure = () => ({ type: LOGIN_FAILURE, payload: error });

// export const loginUser = (userData) => async (dispatch) => {
//   dispatch(loginRequest());
//   try {
//     const response = await axios.post(`${API_BASE_URL}/sign-in`, userData);
//     const user = response.data;
//     if (user.access_token)
//       localStorage.setItem("access_token", user.access_token);
//     console.log("login: ", user);
//     dispatch(loginSuccess(user));
//   } catch (error) {
//     dispatch(loginFailure(error.message));
//   }
// };

export const loginUser = (userData) => async (dispatch) => {
  dispatch(loginRequest());
  try {
    const response = await axios.post(`${API_BASE_URL}/sign-in`, null, {
      headers: {
        Authorization: `Basic ${btoa(`${userData.userEmail}:${userData.userPassword}`)}`
      }
    });
    const user = response.data;
    if (user.access_token) {
      localStorage.setItem("access_token", user.access_token);
      console.log("login: ", user);
      dispatch(loginSuccess(user));
    } else {
      dispatch(loginFailure("Access token not found"));
    }
  } catch (error) {
    dispatch(loginFailure(error.message));
  }
};

export const getUser = (token) => {
  return async (dispatch) => {
    console.log("get user ", token);
    dispatch({ type: GET_USER_REQUEST });
    try {
      const response = await axios.get(`${API_BASE_URL}/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const user = response.data;

      dispatch({ type: GET_USER_SUCCESS, payload: user });
      console.log("req user", user);
    } catch (error) {
      const errorMessage = error.message;
      dispatch({ type: GET_USER_FAILURE, payload: errorMessage });
    }
  };
};

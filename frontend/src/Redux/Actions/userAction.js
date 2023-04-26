import axios from "axios";
import {
  ALL_USERS_FAIL,
  ALL_USERS_SUCCESS,
  CLEAR_ERROR,
  DELETE_USER_FAIL,
  DELETE_USER_SUCCESS,
  FOLLOW_UNFOLLOW_FAIL,
  FOLLOW_UNFOLLOW_SUCCESS,
  FORGOT_PASSWORD_FAIL,
  FORGOT_PASSWORD_SUCCESS,
  LOAD_USER_SUCCESS,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT_FAIL,
  LOGOUT_SUCCESS,
  ONE_USER_FAIL,
  ONE_USER_SUCCESS,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  RESET_PASSWORD_FAIL,
  RESET_PASSWORD_SUCCESS,
  UPDATE_PROFILE_FAIL,
  UPDATE_PROFILE_SUCCESS,
} from "../Constants/userConstants";

export const register = (myForm) => async (dispatch) => {
  try {
    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.post(`/api/v1/register`, myForm, config);

    dispatch({ type: REGISTER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: REGISTER_FAIL, payload: error.response.data.message });
  }
};

export const login = (email, password) => async (dispatch) => {
  try {
    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.post(
      `/api/v1/login`,
      { email, password },
      config
    );

    dispatch({ type: LOGIN_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: LOGIN_FAIL, payload: error.response.data.message });
  }
};

export const updateProfile = (name, email) => async (dispatch) => {
  try {
    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.put(
      `/api/v1/update/profile`,
      {name , email },
      config
    );

    dispatch({ type: UPDATE_PROFILE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: UPDATE_PROFILE_FAIL, payload: error.response.data.message });
  }
};

export const loadUser = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/v1/me`);

    dispatch({ type: LOAD_USER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: LOGIN_FAIL, payload: error.response.data.message });
  }
};

export const logout = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/v1/logout`);

    dispatch({ type: LOGOUT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: LOGOUT_FAIL, payload: error.response.data.message });
  }
};

export const deleteUser = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/v1/delete/me`);

    dispatch({ type: DELETE_USER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: DELETE_USER_FAIL, payload: error.response.data.message });
  }
};

export const allUsers = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/v1/users`);

    dispatch({ type: ALL_USERS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ALL_USERS_FAIL, payload: error.response.data.message });
  }
};

export const oneUser = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/v1/user/${id}`);

    dispatch({ type: ONE_USER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ONE_USER_FAIL, payload: error.response.data.message });
  }
};

export const followAndUnfollowUser = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/v1/follow/${id}`);

    dispatch({ type: FOLLOW_UNFOLLOW_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FOLLOW_UNFOLLOW_FAIL, payload: error.response.data.message });
  }
};

export const forgotPassword = (email) => async (dispatch) => {
  try {
    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.post(
      `/api/v1/forgot/password`,
      { email },
      config
    );

    dispatch({ type: FORGOT_PASSWORD_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: FORGOT_PASSWORD_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const resetPassword =
  (password, confirmPassword, token) => async (dispatch) => {
    try {
      const config = { headers: { "Content-Type": "application/json" } };

      const { data } = await axios.put(
        `/api/v1/password/reset/${token}`,
        { password, confirmPassword },
        config
      );

      dispatch({ type: RESET_PASSWORD_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: RESET_PASSWORD_FAIL,
        payload: error.response.data.message,
      });
    }
  };

// Clearing Errors

export const clearError = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERROR });
};

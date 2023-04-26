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
  LOAD_USER_FAIL,
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

export const userReducer = (state = { user: {} }, { type, payload }) => {
  switch (type) {
    case LOGIN_SUCCESS:
    case LOAD_USER_SUCCESS:
    case REGISTER_SUCCESS:
      return {
        ...state,
        user: payload.user,
      };
    case LOGOUT_SUCCESS:
    case DELETE_USER_SUCCESS:
      return {
        ...state,
        user: null,
      };
    case LOGIN_FAIL:
    case LOAD_USER_FAIL:
    case REGISTER_FAIL:
      return {
        ...state,
        user: null,
        error: payload,
      };
    case LOGOUT_FAIL:
    case DELETE_USER_FAIL:
      return {
        ...state,
        error: payload,
      };
    case CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const allUsersReducer = (state = { users: [] }, { type, payload }) => {
  switch (type) {
    case ALL_USERS_SUCCESS:
      return {
        ...state,
        users: payload.users,
      };

    case ALL_USERS_FAIL:
      return {
        ...state,
        error: payload,
      };

    case CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};

export const oneUserReducer = (
  state = { oneuser: null },
  { type, payload }
) => {
  switch (type) {
    case ONE_USER_SUCCESS:
      return {
        ...state,
        oneuser: payload.user,
      };

    case ONE_USER_FAIL:
      return {
        ...state,
        error: payload,
      };

    case CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};

export const followUnfollowReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case FOLLOW_UNFOLLOW_SUCCESS:
    case UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
        message: payload.message,
      };

    case FOLLOW_UNFOLLOW_FAIL:
    case UPDATE_PROFILE_FAIL:
      return {
        ...state,
        error: payload,
      };

    case CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const forgotPasswordReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        message: payload.message,
      };

    case RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        message: payload.message,
      };

    case FORGOT_PASSWORD_FAIL:
    case RESET_PASSWORD_FAIL:
      return {
        ...state,
        error: payload,
      };

    case CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

import { ADD_COMMENT_FAIL, ADD_COMMENT_RESET, ADD_COMMENT_SUCCESS, ALL_POSTS_FAIL, ALL_POSTS_SUCCESS, CLEAR_ERROR, DELETE_COMMENT_FAIL, DELETE_COMMENT_RESET, DELETE_COMMENT_SUCCESS, DELETE_POST_FAIL, DELETE_POST_RESET, DELETE_POST_SUCCESS, NEW_POST_FAIL, NEW_POST_RESET, NEW_POST_SUCCESS, UPDATE_CAPTION_FAIL, UPDATE_CAPTION_RESET, UPDATE_CAPTION_SUCCESS } from "../Constants/postConstants";

export const newPostReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case NEW_POST_SUCCESS:
      return {
         ...state,
         success:payload.success
      };
    case NEW_POST_FAIL:
      return {
        ...state,
        error:payload.message
      };
      case NEW_POST_RESET:
        return {
          ...state,
          success:false
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

export const allPostsReducer = (state = {posts:[]}, { type, payload }) => {
    switch (type) {
      case ALL_POSTS_SUCCESS:
        return {
           ...state,
           posts:payload.posts
        };
      case ALL_POSTS_FAIL:
        return {
          ...state,
          error:payload.message
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

  export const captionReducer = (state = {}, { type, payload }) => {
    switch (type) {
      case UPDATE_CAPTION_SUCCESS:
        return {
           ...state,
           message:payload.message
        };
      case UPDATE_CAPTION_FAIL:
        return {
          ...state,
          error:payload.message
        };
        case UPDATE_CAPTION_RESET:
          return{
            ...state,
            message:false
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

  export const commentReducer = (state = {}, { type, payload }) => {
    switch (type) {
      case ADD_COMMENT_SUCCESS:
        return {
           ...state,
           message:payload.message
        };
      case ADD_COMMENT_FAIL:
        return {
          ...state,
          error:payload.message
        };
        case ADD_COMMENT_RESET:
          return{
            ...state,
            message:false
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

  export const deleteCommentReducer = (state = {}, { type, payload }) => {
    switch (type) {
      case DELETE_COMMENT_SUCCESS:
        return {
           ...state,
           message:payload.message
        };
      case DELETE_COMMENT_FAIL:
        return {
          ...state,
          error:payload.message
        };
        case DELETE_COMMENT_RESET:
          return{
            ...state,
            message:false
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
  

  export const deletePostReducer = (state = {}, { type, payload }) => {
    switch (type) {
      case DELETE_POST_SUCCESS:
        return {
           ...state,
           message:payload.message
        };
      case DELETE_POST_FAIL:
        return {
          ...state,
          error:payload.message
        };
        case DELETE_POST_RESET:
          return{
            ...state,
            message:false
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
  


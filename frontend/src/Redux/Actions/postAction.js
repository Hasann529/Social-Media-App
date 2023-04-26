import { ADD_COMMENT_FAIL, ADD_COMMENT_SUCCESS, ALL_POSTS_FAIL, ALL_POSTS_SUCCESS, CLEAR_ERROR, DELETE_COMMENT_FAIL, DELETE_COMMENT_SUCCESS, DELETE_POST_FAIL, DELETE_POST_SUCCESS, LIKEUNLIKE_POST_FAIL, LIKEUNLIKE_POST_SUCCESS, NEW_POST_FAIL, NEW_POST_SUCCESS, UPDATE_CAPTION_FAIL, UPDATE_CAPTION_SUCCESS } from "../Constants/postConstants";
import axios from "axios"

export const newPost = (myPost) => async (dispatch) =>{
  try {
     const config = { header : { "Content-Type" : "application/json" } } 

     const { data } = await axios.post(`/api/v1/post/upload`, myPost , config)
    
    dispatch({type:NEW_POST_SUCCESS, payload:data})


  } catch (error) {
    dispatch({type:NEW_POST_FAIL , payload: error.response.data.message })
  }
}

export const allPosts = () => async (dispatch) =>{
    try {
  
       const { data } = await axios.get(`/api/v1/posts`)
      
      dispatch({type:ALL_POSTS_SUCCESS, payload:data})
  
  
    } catch (error) {
      dispatch({type:ALL_POSTS_FAIL , payload: error.response.data.message })
    }
  }

  export const likeUnlikePost = (id) => async (dispatch) =>{
    try {
  
       const { data } = await axios.get(`/api/v1/post/${id}`)
      
      dispatch({type:LIKEUNLIKE_POST_SUCCESS, payload:data})
  
  
    } catch (error) {
      dispatch({type:LIKEUNLIKE_POST_FAIL , payload: error.response.data.message })
    }
  }

  export const updateCaption = (caption,id) => async (dispatch) =>{
    try {
       const config = { header : { "Content-Type" : "application/json" } } 
  
       const { data } = await axios.put(`/api/v1/post/${id}`,{ caption }, config)
      
      dispatch({type:UPDATE_CAPTION_SUCCESS, payload:data})
  
  
    } catch (error) {
      dispatch({type:UPDATE_CAPTION_FAIL , payload: error.response.data.message })
    }
  }

  export const deletePost = (id) => async (dispatch) =>{
    try {
  
       const { data } = await axios.delete(`/api/v1/post/${id}`)
      
      dispatch({type:DELETE_POST_SUCCESS, payload:data})
  
  
    } catch (error) {
      dispatch({type:DELETE_POST_FAIL , payload: error.response.data.message })
    }
  }

  export const addComment = (comment , id) => async (dispatch) =>{
    try {
       const config = { header : { "Content-Type" : "application/json" } } 
  
       const { data } = await axios.put(`/api/v1/post/comment/${id}`, {comment} , config)
      
      dispatch({type:ADD_COMMENT_SUCCESS, payload:data})
  
  
    } catch (error) {
     
      dispatch({type:ADD_COMMENT_FAIL , payload: error.response.data.message })
    }
  }
  
  export const deleteComment = (commentId,id) => async (dispatch) =>{
    try {

       const { data } = await axios.delete(`/api/v1/post/comment/${id}/${commentId}`)
     
      dispatch({type:DELETE_COMMENT_SUCCESS, payload:data})
  
  
    } catch (error) {
      dispatch({type:DELETE_COMMENT_FAIL , payload: error.response.data.message })
    }
  }



  export const clearError = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERROR });
  };
  
  

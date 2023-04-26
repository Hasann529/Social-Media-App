import React, { useEffect } from 'react'
import './UpdatePost.css'
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { clearError, deletePost, updateCaption } from '../../../Redux/Actions/postAction'
import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert'
import { DELETE_POST_RESET, UPDATE_CAPTION_RESET } from '../../../Redux/Constants/postConstants'

const UpdatePost = () => {
  const dispatch = useDispatch() 
  const navigate = useNavigate()
  const alert = useAlert()
  const location = useLocation()
  const {state} = location
  const [caption , setCaption] = useState(state?.caption)
  const {message , error} = useSelector(state => state.caption)
  const {message :deleteMessage  , error : deleteError} = useSelector(state => state.deletePost)

   const Delete =() =>{
         dispatch(deletePost(state?._id))
   }
   const submitUpdate = (e) =>{
           e.preventDefault()
           dispatch(updateCaption(caption,state?._id))  
   }

   useEffect(()=>{
    if(error){
        alert.error(error)
        dispatch(clearError())
    }
    if(message){
        alert.success(message)
        dispatch({type:UPDATE_CAPTION_RESET})
        navigate(`/`)
    }
    if(deleteError){
        alert.error(deleteError)
        dispatch(clearError())
    }
    if(deleteMessage){
        alert.success(deleteMessage)
        dispatch({type:DELETE_POST_RESET})
        navigate(`/`)
    }

   },[dispatch,alert,message,error,navigate,deleteError,deleteMessage])

  return (
    <div className='updatePost'>
        <div className="update">
        <p>Update Caption</p>
        <form onSubmit={submitUpdate}  encType="multipart/form-data" >
          <img src={state?.image.url} alt='' />
          <input
            placeholder="New Caption"
            value={caption}
            type="text"
            onChange={(e) => setCaption(e.target.value)}
          />
          <button type="submit" className="button bn">
            Update
          </button>
        </form>
        <div className="delete" onClick={Delete}>Delete Post</div>
      </div>
    </div>
  )
}

export default UpdatePost

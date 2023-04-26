import React, { useState } from "react";
import "./NewPost.css";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import { clearError, newPost } from "../../../Redux/Actions/postAction";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useAlert } from "react-alert";
import { NEW_POST_RESET } from "../../../Redux/Constants/postConstants";

const NewPost = () => {
    const dispatch = useDispatch()
    const alert  = useAlert()
  const [image, setImage] = useState();
  const [caption, setCaption] = useState("");

  const {error , success} = useSelector(state => state.post)

  const imageChange = (e) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setImage(reader.result);
      }
    };

    reader.readAsDataURL(e.target.files[0]);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    
    const myPost ={
        "caption" : caption,
        "image" : image 
    }

    dispatch(newPost(myPost))
    
  };

  useEffect(()=>{
     if(error){
        alert.error(error)
        dispatch(clearError())
     }
     if(success)
     {
        alert.success("Post Uploaded")
        dispatch({type: NEW_POST_RESET})
        setCaption("")
        setImage("")
     }
  },[alert,error,success,dispatch])

  return (
    <form className="postForm" encType="multipart/form-data" onSubmit={submitHandler}>
      <input className="input-post" type="file" required accept="image/*" onChange={imageChange}  />
      <ControlPointIcon />
      <input
        className="input-caption"
        type="text"
        required
        placeholder="Caption"
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
      />
     { image && <img src={image} alt="" />}
      <button className="bn" type="submit">
        Share
      </button>
    </form>
  );
};

export default NewPost;

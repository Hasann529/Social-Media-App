import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import { addComment, allPosts, clearError, deleteComment } from "../../Redux/Actions/postAction";
import { useAlert } from "react-alert";
import { useNavigate } from "react-router-dom";
import { ADD_COMMENT_RESET, DELETE_COMMENT_RESET } from "../../Redux/Constants/postConstants";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const Comments = ({ post, isOpen, setIsOpen }) => {
  const [postComment, setPostComment] = useState("");
  const dispatch = useDispatch();
  const alert = useAlert();
  const navigate = useNavigate();
  const {error , message} = useSelector(state => state.comment)
  const { error : commentError , message :  commentMessage} = useSelector(state => state.deleteComment)
  const {user} = useSelector(state => state.user)

  const submitForm = (e) => {
    e.preventDefault();
    dispatch(addComment(postComment, post?._id));
  };
   
  const deleteHandler = (commentId,id) => {
     dispatch(deleteComment(commentId,id))
  }

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearError())
    }
    if (message) {
      alert.success(message);
      dispatch({ type: ADD_COMMENT_RESET });
      setIsOpen(false)
      dispatch(allPosts())
      navigate("/");
    }
    if (commentError) {
      alert.error(commentError);
      dispatch(clearError())
    }
    if (commentMessage) {
      alert.success(commentMessage);
      dispatch({ type: DELETE_COMMENT_RESET });
      setIsOpen(false)
      dispatch(allPosts())
      navigate("/");
    }
  }, [error,message,alert,navigate,dispatch,setIsOpen,commentError,commentMessage]);

  return (
    <Modal
      classNames={{ modal: "customModal" }}
      open={isOpen}
      onClose={() => setIsOpen(false)}
    >
      <h4>Comments</h4>
      <div className="comment">
        {post?.comments[0] ? post?.comments.map((comm) => (
          <div key={comm.user}>
            <span>
              <b>{comm.userName}</b>
            </span>
            <span>
              <b>:</b>
            </span>
            <span>{comm.comment}</span>
           {(user._id === post.owner || user._id === comm.user) && <span><DeleteOutlineIcon onClick={()=>deleteHandler(comm._id,post._id)} /></span>
}          </div>
        )) : <p style={{textAlign:"center"}}>No Comment Yet</p> }
      </div>
      <form onSubmit={submitForm} encType="multipart/form-data">
        <input
          placeholder="Comment Here"
          value={postComment}
          onChange={(e) => setPostComment(e.target.value)}
        />
        <button type="submit" className="button">
          Comment
        </button>
      </form>
    </Modal>
  );
};

export default Comments;

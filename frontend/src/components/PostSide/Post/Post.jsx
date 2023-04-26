import React, { useEffect, useState } from "react";
import "./Post.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import { useDispatch, useSelector } from "react-redux";
import { allPosts, likeUnlikePost } from "../../../Redux/Actions/postAction";
import Comments from "../../../pages/Comment/Comments";

const Post = ({ post }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const [isOpen, setIsOpen] = useState(false);
  const [clss, setClss] = useState();

  const likeUnlike = async (id) => {
    await dispatch(likeUnlikePost(id));
    await dispatch(allPosts());
  };

  useEffect(() => {
    setClss(
      post?.likes[0]
        ? post.likes.map((p) => {
            if (p === user?._id) return "red";
            else {
              return "black";
            }
          })
        : "black"
    );
  }, [user, post]);

  return (
    <div className="post">
      <img src={post.image.url} alt="" />

      <div className="postReact">
        <FavoriteIcon className={clss}  onClick={() => likeUnlike(post._id)} />

        <ChatBubbleOutlineOutlinedIcon onClick={() => setIsOpen(true)} />
      </div>
      {isOpen && <Comments post={post} isOpen={isOpen} setIsOpen={setIsOpen} />}
      <span>{post.likes.length} likes</span>
      <span>
        <b>{post.name}:</b> &nbsp;{post.caption}
      </span>
    </div>
  );
};

export default Post;

import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Account.css";
import Cover from "../../img/cover.jpg";
import { useDispatch, useSelector } from "react-redux";
import EditIcon from "@mui/icons-material/Edit";
import { useEffect } from "react";
import { oneUser } from "../../Redux/Actions/userAction";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import { likeUnlikePost } from "../../Redux/Actions/postAction";
import Comments from "../Comment/Comments";

const Account = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { state } = location;
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useSelector((state) => state.user);
  const { oneuser } = useSelector((state) => state.oneuser);
  const [k, setK] = useState();

  const likeUnlike = async (id, owner) => {
    await dispatch(likeUnlikePost(id));
    await dispatch(oneUser(owner));
  };

  useEffect(() => {
    if (state) {
      dispatch(oneUser(state?._id));
    }
  }, [dispatch, state]);

  return (
    <div className="account">
      <div className="profile">
        {oneuser?._id === user._id && (
          <Link to="/update/profile">
            <EditIcon />
          </Link>
        )}
        <div className="profileImages">
          <img src={Cover} alt="cover" />
          <img src={oneuser?.avatar?.url} alt="profile" />
        </div>
        <div className="profileName">
          <span>{oneuser?.name}</span>
        </div>
        <div className="followStatus">
          <hr />
          <div>
            <div className="follow">
              <span>{oneuser?.followers?.length}</span>
              <span>Followers</span>
            </div>
            <div className="vl"></div>
            <div className="follow">
              <span>{oneuser?.following?.length}</span>
              <span>Following</span>
            </div>
          </div>
          <hr />
        </div>
      </div>
      {oneuser?.followers.find((foll) => foll === user._id) ||
      oneuser?._id === user._id ? (
        <div className="posts">
          <h4>Posts</h4>
          <div className="row">
            {oneuser?.posts[0] ? (
              oneuser?.posts?.map((post) => (
                <div className="post" key={post._id}>
                  <img src={post.image.url} alt="" />

                  <div className="postReact">
                    <FavoriteIcon
                      className={
                        post.likes[0]
                          ? post.likes.map((p) =>
                              p === user._id ? "red" : "black"
                            )
                          : "black"
                      }
                      onClick={() => likeUnlike(post._id, post.owner)}
                    />
                    <ChatBubbleOutlineOutlinedIcon
                      onClick={() => {
                        setIsOpen(true);
                        setK(post._id);
                      }}
                    />
                  </div>

                  {isOpen && k === post._id && (
                    <Comments
                      post={post}
                      isOpen={isOpen}
                      setIsOpen={setIsOpen}
                    />
                  )}

                  <span>{post.likes.length} likes</span>
                  <span>
                    <b>{oneuser.name}</b> {post.caption}
                  </span>
                  {oneuser?._id === user._id && (
                    <Link to="/update/post" state={post}>
                      <EditIcon />
                    </Link>
                  )}
                </div>
              ))
            ) : (
              <h2>No Post Yet</h2>
            )}
          </div>
        </div>
      ) : (
        <p>
          <b>Private Account</b> , You need to follow to see the posts
        </p>
      )}
    </div>
  );
};

export default Account;

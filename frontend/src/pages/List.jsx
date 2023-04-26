import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import "./List.css";

const List = ({ fol, x }) => {
  const { users } = useSelector((state) => state.users);

  return users?.map((User) => {
    return (
      User._id === fol && (
        <Link to={`/profile/${User.name}`} key={User._id} state={User}>
          <div className="user" key={User._id}>
            <div>
              <img src={User?.avatar?.url} alt="" className="userImg" />
              <div className="name">
                <span>{User.name}</span>
              </div>
            </div>
          </div>
        </Link>
      )
    );
  });
};

export default List;

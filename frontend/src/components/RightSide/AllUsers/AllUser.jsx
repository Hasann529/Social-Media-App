import React, { useEffect } from "react";
import "./AllUser.css";
import {  useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
import Buttn from "./Buttn";
import { allUsers } from "../../../Redux/Actions/userAction";

const AllUser = () => {
  const { users } = useSelector((state) => state.users);
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch()



   useEffect(() => {
     dispatch(allUsers());
   
   }, [dispatch]);

  return (
    <div className="allusers">
      <h3>People</h3>
      {users?.map((User, i) => (
        user?._id !== User._id &&
        <div className="user" key={i}>
        <div>
            <img src={User?.avatar?.url} alt="" className="userImg" />
            <Link to={`/profile/${User.name}`} key={i} state={User}>
            <div className="name">
              <span>{User.name}</span>
            </div>
            </Link>
        </div>
         
          <Buttn User={User} />
        </div>
       
      ) )}
    </div>
  );
};

export default AllUser;

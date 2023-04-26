import React from "react";
import "./UpdateProfile.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearError, deleteUser, loadUser, updateProfile } from "../../../Redux/Actions/userAction";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAlert } from "react-alert";

const UpdateProfile = () => {
  const { user } = useSelector((state) => state.user);
  const { error} = useSelector((state) => state.follow);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const alert = useAlert();

  const [name, setName] = useState(user?.name);
  const [email, setEmail] = useState(user?.email);

  const submitUpdate =  async(e) => {
    e.preventDefault();

    await dispatch(updateProfile(name, email));
    await dispatch(loadUser())
    
    navigate(`/`);
    alert.success("Profile Updated")
  };

  const Delete = () =>{
    dispatch(deleteUser())
    alert.success("Account Deleted")
   }

  useEffect(() => {
    if (error){ 
      alert.error(error);
      dispatch(clearError())
    }
  
  }, [alert, error,dispatch]);

  return (
    <div className="updateProfile">
      <div className="updateInfo">
        <p>Update Profile</p>
        <form onSubmit={submitUpdate}  encType="multipart/form-data" >
          <input
            placeholder="Name"
            value={name}
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit" className="button bn">
            Update
          </button>
        </form>
        <div className="delete" onClick={Delete}>Delete Account</div>
      </div>
    </div>
  );
};

export default UpdateProfile;

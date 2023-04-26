import React, { useEffect, useState } from "react";
import "./Auth.css";
import logo from "../../img/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { clearError, login, register } from "../../Redux/Actions/userAction";
import { useAlert } from "react-alert";
import { Link, useNavigate } from "react-router-dom";

const Auth = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [signUpName, setSignUpName] = useState("");
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");

  const [avatar, setAvatar] = useState("");
  const [avatarPreview, setAvatarPreview] = useState("/Profile.png");

  const { error, user } = useSelector((state) => state.user);

  const signUpSubmit = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.append("name", signUpName);
    myForm.append("email", signUpEmail);
    myForm.append("password", signUpPassword);
    myForm.append("avatar", avatar);

    dispatch(register(myForm));
  };
  const logInSubmit = (e) => {
    e.preventDefault();
    dispatch(login(loginEmail, loginPassword));
  };

  const registerDataChange = (e) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setAvatarPreview(reader.result);
        setAvatar(reader.result);
      }
    };

    reader.readAsDataURL(e.target.files[0]);
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearError());
    }
    if (user && Object.keys(user).length !== 0) {
      navigate("/");
      alert.success("Logged In");
    }
  }, [alert, error, user, navigate, dispatch]);

  return (
    <div className="auth">
      <div className="a-left">
        <img src={logo} alt="" />
        <div className="a-left-text">
          <h1>Social Media</h1>
          <span>Explore the ideas throughout the world</span>
        </div>
      </div>
      {!toggle ? (
        <div className="a-right">
          <form className="infoForm authForm" onSubmit={logInSubmit}>
            <h3>Log In</h3>

            <div>
              <input
                type="email"
                placeholder="Email"
                className="infoInput"
                required
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
              />
            </div>

            <div>
              <input
                type="password"
                className="infoInput"
                placeholder="Password"
                required
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
              />
            </div>

            <div>
              <span
                className="toggle"
                onClick={() => setToggle(true)}
                style={{ fontSize: "12px" }}
              >
                Don't have an account Sign up
              </span>
              <button className="button infoButton">Login</button>
            </div>
            <div className="forgotPassword">
            <Link to="/forgot/password">Forgot Password</Link>
          </div>
          </form>
          
        </div>
      ) : (
        <div className="a-right">
          <form
            className="infoForm authForm"
            encType="multipart/form-data"
            onSubmit={signUpSubmit}
          >
            <h3>Sign up</h3>

            <div>
              <input
                type="text"
                placeholder="Name"
                className="infoInput"
                value={signUpName}
                required
                onChange={(e) => setSignUpName(e.target.value)}
              />
            </div>

            <div>
              <input
                type="email"
                className="infoInput"
                placeholder="Email"
                value={signUpEmail}
                required
                onChange={(e) => setSignUpEmail(e.target.value)}
              />
            </div>

            <div>
              <input
                type="password"
                className="infoInput"
                placeholder="Password"
                value={signUpPassword}
                required
                onChange={(e) => setSignUpPassword(e.target.value)}
              />
            </div>
            <div>
              <img
                src={avatarPreview}
                alt="Avatar Preview"
                className="avatarPreview"
              />
              <input
                type="file"
                className="dp"
                accept="image/*"
                required
                onChange={registerDataChange}
                name="avatar"
              />
            </div>
            <div>
              <span
                className="toggle"
                onClick={() => setToggle(false)}
                style={{ fontSize: "12px" }}
              >
                Already have an account. Login!
              </span>

              <button className="button infoButton" type="submit">
                Signup
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Auth;

import "./App.css";
import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth/Auth";
import ProtectedRoute from "./ProtectedRoute";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { allUsers, loadUser } from "./Redux/Actions/userAction";
import ForgotPassword from "./pages/Forgot-Reset-Password/ForgotPassword";
import ResetPassword from "./pages/Forgot-Reset-Password/ResetPassword";
import Account from "./pages/Account/Account";
import UpdateProfile from "./pages/Account/UpdateProfile/UpdateProfile";
import UpdatePost from "./pages/Account/UpdatePost/UpdatePost";


function App() {
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(loadUser());
    dispatch(allUsers());
  }, [dispatch]);

  return (
    <div className='App' >
      <div className="blur" style={{ top: "-18%", right: "0" }}></div>
      <div className="blur" style={{ top: "36%", left: "-8rem" }}></div>
      <Router>
        <Routes>
          <Route path="/login" element={<Auth />} />
          <Route path="/forgot/password" element={<ForgotPassword />} />
          <Route path="/password/reset/:token" element={<ResetPassword />} />
          <Route path="/profile/:name" element={<ProtectedRoute><Account/></ProtectedRoute>} />
          <Route path="/update/profile" element={<ProtectedRoute><UpdateProfile/></ProtectedRoute>} />
          <Route path="/update/post" element={<ProtectedRoute><UpdatePost/></ProtectedRoute>} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

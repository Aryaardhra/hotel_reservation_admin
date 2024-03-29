import axios from 'axios';
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext'; 
import "../login/adminLogin.css";
import { axiosInstance } from '../../config';

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

  const {  user, loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate()

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axiosInstance.post("/auth/login", credentials);
      if (res.data.isAdmin) {
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });

        navigate("/");
      } else {
        dispatch({
          type: "LOGIN_FAILURE",
          payload: { message: "You are not allowed!" },
        });
      }
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };
console.log(user)
  return (
    <><div className="login">
    <div className="lcontainer">
      <input
        type="text"
        placeholder="username"
        id="username"
        onChange={handleChange}
        className="linput"
      />
      <input
        type="password"
        placeholder="password"
        id="password"
        onChange={handleChange}
        className="linput"
      />
      <button disabled={loading} onClick={handleClick} className="lbutton">
        Login
      </button>
      {error && <span>{error.message}</span>}
    </div>
  </div>
    </>
  )
}

export default Login;
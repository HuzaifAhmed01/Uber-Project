import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const UserLogout = () => {
  let navigate = useNavigate();

  let token = localStorage.getItem("token");

  useEffect(()=>{
    
  const userLogout = () => {
    try {
      axios
        .get(`${import.meta.env.VITE_BASE_URL}/users/logout`, {
          headers: {
            Authorization: token ? `Bearer ${token}` : "",
          },
        })
        .then((response) => {
          if (response.status === 200) {
            localStorage.removeItem("token");
            navigate("/user-login");
          }
        });
    } catch (error) {
      console.log("error occured while user logging out" + error.message);
    }
    
  }
  userLogout();
  },[navigate]);

  return (
    <div>
      <h2>user Logout Div</h2>
    </div>
  );
};

export default UserLogout;

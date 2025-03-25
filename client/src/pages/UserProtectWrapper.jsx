import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UserProtectWrapper = ({ children }) => {
    let token = localStorage.getItem("token");
    let navigate = useNavigate();
 
    useEffect(() => {
      if (!token) {
        navigate("/login");
      }    
    }, [token]);
    

  return <>{children}</>;
};

export default UserProtectWrapper;

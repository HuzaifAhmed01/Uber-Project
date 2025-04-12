import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userDataContext } from "../context/userContext";

const UserProtectWrapper = ({ children }) => {
  let token = localStorage.getItem("token");
  let navigate = useNavigate();
  let [isLoading, setIsLoading] = useState(true);
  let { user, setUser } = useContext(userDataContext);

  useEffect(() => {
    if (!token) {
      navigate("/user-login");
      return;
    }

    let fetchingUser = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/users/profile`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (response.status === 200) {
          console.log(response);
          const data = response.data;
          setUser(data.user);
          setIsLoading(false);
        }
      } catch (error) {
        console.log(
          "error occured while fetching profile of user from user wrapper" +
            error.message
        );
        localStorage.removeItem("token");
        navigate("/user-login");
      } finally {
        setIsLoading(false);
      }
    };
    fetchingUser();
  }, [token, navigate, setUser]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
};

export default UserProtectWrapper;

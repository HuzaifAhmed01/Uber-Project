import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { captainDataContext } from "../context/CaptainContext";
import axios from "axios";

const CaptainProtectWrapper = ({ children }) => {
  const token = localStorage.getItem("token");
  let navigate = useNavigate();
  let { captain, setCaptain } = useContext(captainDataContext);
  let [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!token) {
      navigate("/captain-login");
      return;
    }

    const fetchCaptain = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/captains/profile`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (response.status === 200) {
          const data = response.data;
          setCaptain(data.captain);
          setIsLoading(false);
        }
      } catch (error) {
        console.log("error occured while fetching profile" + error.message);
        localStorage.removeItem("token");
        navigate("/captain-login");
      } finally {
        setIsLoading(false);
      }
    };

    fetchCaptain();
  }, [token, navigate, setCaptain]);

  if (isLoading) {
    return <div>loading...</div>;
  }

  return <>{children}</>;
};

export default CaptainProtectWrapper;

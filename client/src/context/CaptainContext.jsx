import React, { createContext, useContext, useState } from "react";

// Create the CaptainContext
export const captainDataContext = createContext();


// Create a provider component
const CaptainContext = ({ children }) => {
  const [captain, setCaptain] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);

  const updateCaptain = (params) => {
    setCaptain(params);
  };


  

  return (
    <captainDataContext.Provider value={{captain,
        setCaptain,
        isLoading,
        setIsLoading,
        error,
        setError,
        updateCaptain}
    }>
      {children}
    </captainDataContext.Provider>
  );
};

export default CaptainContext;

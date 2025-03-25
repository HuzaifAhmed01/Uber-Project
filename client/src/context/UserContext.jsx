import React, { useState } from "react";

export let userDataContext = React.createContext();

const UserContext = ({ children }) => {
  let [user, setUser] = useState({
    email: "",
    fullname: {
      firstname: "",
      lastname: "",
    },
  });

  return (
    <div>
      <userDataContext.Provider value={{ user, setUser }}>
        {children}
      </userDataContext.Provider>
    </div>
  );
};

export default UserContext;

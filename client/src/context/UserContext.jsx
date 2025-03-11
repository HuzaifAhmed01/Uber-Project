import React, { useState } from "react";

export let useDataContext = React.createContext();

const UserContext = ({ children }) => {
let [user , setUser] = useState({
  email:"",
  fullname:{
    firstname:"",
    lastname:""
  }
})

  return (
    <div>
      <useDataContext.Provider value={[user,setUser]}>{children}</useDataContext.Provider>
    </div>
  );
};

export default UserContext;

import React from "react";
import { Route, Routes } from "react-router-dom";
import UserLogin from "../pages/UserLogin";
import UserRegister from "../pages/UserRegister";
import CaptainLogin from "../pages/CaptainLogin";
import CaptainRegister from "../pages/CaptainRegister";
import Start from "../pages/Start";
import Home from "../pages/Home";
import UserProtectWrapper from "../pages/UserProtectWrapper";
import UserLogout from "../pages/UserLogout";

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/user-login" element={<UserLogin />} />
        <Route path="/user-register" element={<UserRegister />} />
        <Route path="/captain-login" element={<CaptainLogin />} />
        <Route path="/captain-register" element={<CaptainRegister />} />
        <Route
          path="/home"
          element={
            <UserProtectWrapper>
              <Home />
            </UserProtectWrapper>
          }
        />
        <Route
          path="/user/logout"
          element={
            <UserProtectWrapper>
              <UserLogout />
             </UserProtectWrapper>
          }
        />
      </Routes>
    </div>
  );
};

export default Router;

import React, { useState } from "react";
import { UberCaptianLogo } from "../assets/images";
import { Link } from "react-router-dom";

const CaptainLogin = () => {

let [email, setEmail]= useState(""); 
let [password, setPassword]= useState(""); 
let [captainData, setCaptainData]= useState({});


let handleSubmit =(e)=>{

  e.preventDefault();
  setCaptainData({
    email:email,
    password:password
  })

  console.log(captainData);

  setEmail("");
  setPassword("");


}

  return (
    <div className="p-7 h-screen flex flex-col justify-between  ">
      <div>
        <img src={UberCaptianLogo} className="w-16 mb-10" alt="" />
        <form onSubmit={(e)=>{handleSubmit(e)}}>
          <h3 className="text-lg font-medium mb-2">What's your email?</h3>

          <input
            value={email}
            onChange={(e)=>{setEmail(e.target.value)}}
            name="email"
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2  w-full text-lg placeholder:text-base"
            required
            type="email"
            placeholder="email@example.com"
          />

          <h3 className="text-lg font-medium mb-2">Enter Password</h3>

          <input
            value={password}
            onChange={(e)=>{setPassword(e.target.value)}}
            name="password"
            required
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2  w-full text-lg placeholder:text-base"
            type="password"
            placeholder="password"
          />
          <button
            type="submit"
            className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2  w-full text-lg placeholder:text-base"
          >
            Login
          </button>
          <p className="text-center">
            Join a fleet?
            <Link to="/captain-register" className="text-blue-600 ">
              Register as a Captain
            </Link>
          </p>
        </form>
      </div>
      <div>
        <Link
          to="/user-login"
          className="bg-[#f3c146] flex items-center justify-center text-white font-semibold mb-5 rounded px-4 py-2  w-full text-lg placeholder:text-base"
        >
          Sign in as user
        </Link>
      </div>
    </div>
  );
};

export default CaptainLogin;

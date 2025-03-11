import React, { useState } from "react";
import { UberCaptianLogo } from "../assets/images";
import { Link } from "react-router-dom";

const CaptainRegister = () => {
  let [firstname, setFirstname] = useState("");
  let [lastname, setLastname] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [captainData, setCaptainData] = useState({});

  let handleSubmit =  (e) => {
    e.preventDefault();
    setCaptainData({
      fullname: {
        firstname: firstname,
        lastname: lastname,
      },
      email: email,
      password: password,
    });




    setEmail('');
    setPassword('');
    setFirstname('');
    setLastname('');
  };

  return (
    <div className="p-7 h-screen flex flex-col justify-between  ">
      <div>
        <img src={UberCaptianLogo} className="w-16 mb-10" alt="" />
        <form onSubmit={(e)=>{handleSubmit(e)}}>
          <h3 className="text-lg font-medium mb-2">What our captain's name?</h3>
          <div className="flex gap-4 mb-5 ">
            <input
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              name="firstname"
              className="bg-[#eeeeee]  w-1/2 rounded px-4 py-2 text-lg placeholder:text-base"
              required
              type="text"
              placeholder="First name"
            />
            <input
              value={lastname}
              onChange={(e) => {
                setLastname(e.target.value);
              }}
              name="lastname"
              className="bg-[#eeeeee]   w-1/2 rounded px-4 py-2  text-lg placeholder:text-base"
              required
              type="text"
              placeholder="Last name"
            />
          </div>

          <h3 className="text-lg font-medium mb-2">What our captain's email?</h3>

          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            name="email"
            className="bg-[#eeeeee] mb-5 rounded px-4 py-2  w-full text-lg placeholder:text-base"
            required
            type="email"
            placeholder="email@example.com"
          />

          <h3 className="text-lg font-medium mb-2">Enter Password</h3>

          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            name="password"
            required
            className="bg-[#eeeeee] mb-5 rounded px-4 py-2  w-full text-lg placeholder:text-base"
            type="password"
            placeholder="password"
          />
          <button
            type="submit"
            className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2  w-full text-lg placeholder:text-base"
          >
            register
          </button>
          <p className="text-center">
            already have an account?
            <Link to="/captain-login" className="text-blue-600 ">
              login here
            </Link>
          </p>
        </form>
      </div>
      <div>
        <p className="text-[10px] leading-tight">
          this site is protected by reCAPTCHA and the{" "}
          <span className="underline">Google Privacy Policy</span> and{" "}
          <span className="underline">terms of service apply</span>.
        </p>
      </div>
    </div>
  );
};

export default CaptainRegister;

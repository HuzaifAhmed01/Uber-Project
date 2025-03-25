import React, { useContext, useState } from "react";
import { UberCaptianLogo } from "../assets/images";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { captainDataContext } from "../context/CaptainContext";

const CaptainRegister = () => {
  let [firstname, setFirstname] = useState("");
  let [lastname, setLastname] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [color, setColor] = useState("");
  let [plate, setPlate] = useState("");
  let [capacity, setCapacity] = useState("");
  let [vehicleType, setVehicleType] = useState("");

  const navigate = useNavigate();

  const { captain,setCaptain } = useContext(captainDataContext);



  // let [captainData, setCaptainData] = useState({});

  let handleSubmit = async (e) => {
    e.preventDefault();
    const captainData = {
      fullname: {
        firstname: firstname,
        lastname: lastname,
      },
      email: email,
      password: password,
      vehicle: {
        color,
        plate,
        capacity,
        vehicleType,
      },
    };

    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/captains/register`,
      captainData
    );
    if (response.status === 201) {
      const data = await response.data;
      setCaptain(data.captain);
      console.log(data);
      console.log(captain);
      localStorage.setItem("token", data.token);

      navigate("/");
    }

    setEmail("");
    setPassword("");
    setFirstname("");
    setLastname("");
    setColor("");
    setPlate("");
    setCapacity("");
    setVehicleType("");
  };

  return (
    <div className="p-7 h-auto flex flex-col justify-between">
      <div>
        <img src={UberCaptianLogo} className="w-16 mb-10" alt="" />
        <form onSubmit={(e) => handleSubmit(e)}>
          <h3 className="text-lg font-medium mb-2">What our captain's name?</h3>
          <div className="flex gap-4 mb-5">
            <input
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              name="firstname"
              className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 text-lg placeholder:text-base"
              required
              type="text"
              placeholder="First name"
            />
            <input
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              name="lastname"
              className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 text-lg placeholder:text-base"
              required
              type="text"
              placeholder="Last name"
            />
          </div>

          <h3 className="text-lg font-medium mb-2">
            What our captain's email?
          </h3>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            className="bg-[#eeeeee] mb-5 rounded px-4 py-2 w-full text-lg placeholder:text-base"
            required
            type="email"
            placeholder="email@example.com"
          />

          <h3 className="text-lg font-medium mb-2">Enter Password</h3>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            required
            className="bg-[#eeeeee] mb-5 rounded px-4 py-2 w-full text-lg placeholder:text-base"
            type="password"
            placeholder="password"
          />

          <h3 className="text-lg font-medium mb-2">Vehicle Information</h3>
          <div className="flex gap-4 mb-5">
            <input
              value={color}
              onChange={(e) => setColor(e.target.value)}
              name="color"
              className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 text-lg placeholder:text-base"
              required
              type="text"
              placeholder="Vehicle color"
            />
            <input
              value={plate}
              onChange={(e) => setPlate(e.target.value)}
              name="plate"
              className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 text-lg placeholder:text-base"
              required
              type="text"
              placeholder="Plate number"
            />
          </div>
          <div className="flex gap-4 mb-5">
            <input
              value={capacity}
              onChange={(e) => setCapacity(e.target.value)}
              name="capacity"
              className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 text-lg placeholder:text-base"
              required
              type="number"
              placeholder="Seating Capacity"
            />
            <select
              value={vehicleType}
              onChange={(e) => setVehicleType(e.target.value)}
              name="vehicleType"
              className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 text-base placeholder:text-base"
              required
            >
              <option value="" disabled>
                Select Vehicle
              </option>
              <option value="car">Car</option>
              <option value="auto">Auto</option>
              <option value="bike">Bike</option>
            </select>
          </div>

          <button
            type="submit"
            className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base"
          >
            register captain
          </button>
          <p className="text-center">
            already have an account?
            <Link to="/captain-login" className="text-blue-600">
              login here
            </Link>
          </p>
        </form>
      </div>
      <div className="mt-5">
        <p className="text-[10px] leading-tight ">
          this site is protected by reCAPTCHA and the{" "}
          <span className="underline">Google Privacy Policy</span> and{" "}
          <span className="underline">terms of service apply</span>.
        </p>
      </div>
    </div>
  );
};

export default CaptainRegister;

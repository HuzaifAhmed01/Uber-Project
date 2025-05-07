import React from "react";
import { RiArrowDownWideFill } from "react-icons/ri";

import { TiUser } from "react-icons/ti";
import { UberAuto, UberMoto, UberWhiteCar } from "../assets/images";

const VehiclePanel = (props) => {
  let vehicles = [
    {
      name: "UberGo",
      image: UberWhiteCar,
      time: "2 mins away",
      price: "193.20",
      capacity: 4,
      description: "Affordable, compact rides",
    },
    {
      name: "Moto",
      image: UberMoto,
      time: "3 mins away",
      price: "65",
      capacity: 1,
      description: "Affordable, motorcycle rides",
    },
    {
      name: "UberAuto",
      image: UberAuto,
      time: "3 mins away",
      price: "30",
      capacity: 3,
      description: "Affordable, Auto rides",
    },
  ];

  return (
    <div>
      <h5
        className="w-full flex justify-center text-center px-2 py-3 text-gray-400 "
      >
        < RiArrowDownWideFill size={20} onClick={()=>props.setVehiclePanelOpen(false)} />
      </h5>
      <h3 className="text-2xl font-semibold mb-5">choose a vehicle</h3>
      {vehicles.map((vehicle, index) => {
        return (
          <div

          
            key={index}
            onClick={() =>{props.setConfirmedRidePanel(true);
              props.setVehiclePanelOpen(false)}
            }
            className=" bg-white border-2 border-gray-300 active:border-black mb-2 rounded-2xl flex w-full p-3 items-center justify-center  "
          >
            <img className="h-12 " src={vehicle.image} alt="" />
            <div className="ml-2 w-1/2">
              <h4 className="font-medium text-base flex">
                {vehicle.name}{" "}
                <span className="flex items-center">
                  <TiUser />
                  {vehicle.capacity}
                </span>
              </h4>
              <h5 className="font-medium text-sm">{vehicle.time}</h5>
              <p className="font-normal text-gray-600 text-xs">
                {vehicle.description}
              </p>
            </div>
            <h2 className="text-lg font-semibold">₹{vehicle.price}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default VehiclePanel;

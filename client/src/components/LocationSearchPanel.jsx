import React from "react";
import { MdLocationPin } from "react-icons/md";

const LocationSearchPanel = (props) => {
  const locations = [
    "workshop corner opposite of water tank",
    "workshop corner opposite of electric power house",
    "workshop corner opposite of farm",
  ];

  return (
    <div>
      {/* sample data         */}
      {locations.map((location, index) => {
        return (
          <div
            onClick={() => {
              props.setVehiclePanelOpen(true);
              props.setPanelOPen(false);
            }}
            key={index}
            className="flex border-2 border-gray-50 rounded-xl p-3  active:border-black items-center gap-3 my-4 justify-center"
          >
            <h2 className="bg-[#eee] p-3 rounded-full  ">
              <MdLocationPin size={25} />
            </h2>
            <h4 className="font-medium">{location}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default LocationSearchPanel;

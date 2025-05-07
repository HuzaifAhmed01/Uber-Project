import React, { useRef, useState } from "react";
import { Uberlogo, UberMap } from "../assets/images";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { RiArrowDownWideFill } from "react-icons/ri";
import LocationSearchPanel from "../components/LocationSearchPanel";
import VehiclePanel from "../components/VehiclePanel";
import ConfirmedRide from "../components/ConfirmedRide";
import LookingForDriver from "../components/LookingForDriver";
import WaitingForDriver from "../components/WaitingForDriver";

const Home = () => {
  let [pickup, setPickup] = useState("");
  let [destination, setDestination] = useState("");
  let [panelOpen, setPanelOPen] = useState(false);
  let [vehiclePanelOpen, setVehiclePanelOpen] = useState(false);
  let [confirmedRidePanel,setConfirmedRidePanel]= useState(false);
  let [vehicleFound, setVehicleFound] = useState(false);
  let [waitingForDriver, setWaitingForDriver] = useState(false);
  let panelRef = useRef(null);
  let panelCloseRef = useRef(null);
  let vehiclePanelRef = useRef(null);
  let confirmedRidePanelRef = useRef(null);
  let vehicleRef = useRef(null);
  let waitingForDriverRef = useRef(null);
  

  const submitHandler = (e) => {
    e.preventDefault();
  };

  useGSAP(() => {
    if (panelOpen) {
      gsap.to(panelRef.current, {
        height: "70%",
        padding: 24,
      });
      gsap.to(panelCloseRef.current, {
        opacity: 1,
      });
    } else {
      gsap.to(panelRef.current, {
        height: "0%",
        padding: 0,
      });
      gsap.to(panelCloseRef.current, {
        opacity: 0,
      });
    }
  }, [panelOpen]); // this is for controlling location search panel open and close

  useGSAP(() => {
    if (vehiclePanelOpen) {
      gsap.to(vehiclePanelRef.current, {
        transform: "translateY(0)",
        duration: 0.5,
      });
    } else {
      gsap.to(vehiclePanelRef.current, {
        transform: "translateY(100%)",
        duration: 0.5,
      });
    }
  }, [vehiclePanelOpen]); // this is for controlling vehicle panel open and close

  useGSAP(() => {
    if (confirmedRidePanel) {
      gsap.to(confirmedRidePanelRef.current, {
        transform: "translateY(0)",
        duration: 0.5,
      });
    } else {
      gsap.to(confirmedRidePanelRef.current, {
        transform: "translateY(100%)",
        duration: 0.5,
      });
    }
  }, [confirmedRidePanel]);  // this is for confirming ride 

  useGSAP(() => {
    if (vehicleFound) {
      gsap.to(vehicleRef.current, {
        transform: "translateY(0)",
        duration: 0.5,
      });
    } else {
      gsap.to(vehicleRef.current, {
        transform: "translateY(100%)",
        duration: 0.5,
      });
    }
  }, [vehicleFound]);// this is for controlling Looking for driver panel 

  useGSAP(() => {
    if (waitingForDriver) {
      gsap.to(waitingForDriverRef.current, {
        transform: "translateY(0)",
        duration: 0.5,
      });
    } else {
      gsap.to(waitingForDriverRef.current, {
        transform: "translateY(100%)",
        duration: 0.5,
      });
    }
  }, [waitingForDriver]);// this is for controlling waiting for driver panel



  return (
    <div className="h-screen overflow-hidden relative ">
      <img
        className="w-16 absolute top-5 left-5"
        src={Uberlogo}
        alt="uberLogo"
      />
      <div className="w-full h-screen ">
        <img className="w-full h-full object-cover" src={UberMap} alt="" />
      </div>
      <div className=" h-screen flex flex-col justify-end absolute top-0 w-full ">
        <div className="bg-white h-[30%] p-6 relative">
          <h5
            onClick={() => setPanelOPen(false)}
            ref={panelCloseRef}
            className={`absolute right-6 top-7 text-2xl text-black/70`}
          >
            <RiArrowDownWideFill />
          </h5>

          <h4 className="text-3xl font-semibold">Find a trip</h4>
          <form onSubmit={(e) => submitHandler(e)}>
            <div className="line absolute h-16 w-1 top-[45%] left-10 bg-gray-900 rounded"></div>
            <input
              onClick={() => setPanelOPen(true)}
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              className="bg-[#eee]  px-12 py-2 text-lg rounded-lg w-full mt-5"
              type="text"
              placeholder="Add a pick up location"
            />
            <input
              onClick={() => setPanelOPen(true)}
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="bg-[#eee]  px-12 py-2 text-lg rounded-lg w-full mt-3"
              type="text"
              placeholder="Enter your destinition"
            />
          </form>
        </div>
        <div ref={panelRef} className="bg-white">
          <LocationSearchPanel
            setPanelOPen={setPanelOPen}
            setVehiclePanelOpen={setVehiclePanelOpen}
          />
        </div>
      </div>

      {/* this is for controlling vehicle panel */}
      <div
        ref={vehiclePanelRef}
        className="w-full fixed z-10 bottom-0 px-3 py-10 pt-3 bg-white translate-y-full"
      >
        <VehiclePanel setConfirmedRidePanel={setConfirmedRidePanel} setVehiclePanelOpen={setVehiclePanelOpen} />    
      </div>


      {/* this is for controlling vehicle ride panel */}
      <div
        ref={confirmedRidePanelRef}
        className="w-full fixed z-10 bottom-0 px-3 py-3 pt-6 bg-white translate-y-full"
      >
        <ConfirmedRide  setConfirmedRidePanel={setConfirmedRidePanel} setVehicleFound={setVehicleFound}  />
 
      </div>
      <div
        ref={vehicleRef}
        className="w-full fixed z-10 bottom-0 px-3 py-3  pt-6 bg-white translate-y-full"
      >
        <LookingForDriver setVehicleFound={setVehicleFound} />
 
      </div>

      <div
        ref={waitingForDriverRef}
        className="w-full fixed z-10 bottom-0 px-3 py-3  pt-6 bg-white translate-y-full"
      >
        <WaitingForDriver setWaitingForDriver={setWaitingForDriver}/>
 
      </div>
    </div>
  );
};

export default Home;

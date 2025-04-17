import React, { useRef, useState } from "react";
import { Uberlogo, UberMap } from "../assets/images";
import {gsap} from "gsap";
import {useGSAP} from "@gsap/react"
import { RiArrowDownWideFill } from "react-icons/ri";
import LocationSearchPanel from "../components/LocationSearchPanel";
import { UberWhiteCar } from "../assets/images";
import { TiUser } from "react-icons/ti";




const Home = () => {
  let [pickup, setPickup] = useState("");
  let [destination, setDestination] = useState("");
  let [panelOpen, setPanelOPen] = useState(false);
  let panelRef = useRef(null);
  let panelCloseRef= useRef(null);
  

  const submitHandler = (e) => {
    e.preventDefault();
  };

  useGSAP(()=>{
 
    if(panelOpen){
      gsap.to(panelRef.current,{
        height:'70%',
        padding:24
        
      })
      gsap.to(panelCloseRef.current,{
        opacity:1
      })
    }else{
      gsap.to(panelRef.current,{
        height:'0%',
        padding:0,
     
      })
      gsap.to(panelCloseRef.current,{
        opacity:0
      }
)
    }

  },[panelOpen])
  

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
<h5 onClick={()=>setPanelOPen(false)} ref={panelCloseRef} className={`absolute right-6 top-7 text-2xl text-black/70`}>
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
          <LocationSearchPanel/>
        </div>
      </div>
      <div className="fixed z-10 bottom-0 p-5">
       <div className="flex items-center justify-center bg-red-400  ">
       <img className="h-12" src={UberWhiteCar} alt="" />
        <div className="bg-green-200 w-1/2"> 
          <h4 className="font-medium text-sm flex">UberGo <span className="flex items-center"><TiUser/>4</span></h4>
          <h5 className="font-medium text-sm">2 mins away</h5>
          <p className="font-normal text-gray-600 text-xs">Affordable, compact rides</p>
        </div>
        <h2 className="text-xl font-semibold">₹193.20</h2>
       </div>
      </div>
    </div>
  );
};

export default Home;

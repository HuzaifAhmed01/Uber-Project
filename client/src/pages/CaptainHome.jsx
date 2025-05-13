import React from "react";

import { CiLogout } from "react-icons/ci";
import { Link } from "react-router-dom";
import { UberDriver, Uberlogo} from "../assets/images";
import { MdOutlineAccessTime } from "react-icons/md";
import { MdOutlineSpeed } from "react-icons/md";
import { LuNotebook } from "react-icons/lu";
import { FiLogOut } from "react-icons/fi";
import CaptainDetails from "../components/CaptainDetails";
// import Map from "https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
const CaptainHome = () => {
  return (
    <div className="h-screen">
      <div className="fixed p-3 top-0 flex items-center justify-between w-full ">
        <img src={Uberlogo} className="w-16" alt="" />
        <Link
          to={"/home"}
          className="fixed bg-white items-center justify-center rounded-full p-2 top-3 right-3"
        >
          <FiLogOut className="w-5 h-5 text-black" />
        </Link>
      </div>

      <div>
        <img className="h-screen w-full object-cover " src='https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif' alt="" />
      </div>
      <div className="h-auto absolute  bottom-0 left-0 right-0 p-4  bg-white ">
  <CaptainDetails/>
      </div>
    </div>
  );
};

export default CaptainHome;

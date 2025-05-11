import React from 'react'
import { FaBold, FaMoneyCheck } from 'react-icons/fa'
import { MdLocationPin } from 'react-icons/md'
import { CiLogout } from "react-icons/ci";
import { Link } from 'react-router-dom'
import { UberMap, UberWhiteCar } from '../assets/images'


const CaptainHome = () => {
  return (
    <div>
        <div className="fixed bg-white items-center justify-center rounded-full p-2 top-3 right-3">
        <img src="" alt="" />
        <Link to={'/home'}>
        <CiLogout className="w-5 h-5 text-black" />
</Link> 
        </div>


      <div>
        <img className="full w-full " src={UberMap} alt="" />
      </div>
      <div className="h-auto absolute  bottom-0 left-0 right-0 p-4  bg-white ">
        <div className="flex items-center justify-between">
          <img className="h-12" src={UberWhiteCar} alt="" />
          <div className="text-right">
            <h2 className="text-lg font-medium">John Doe</h2>
            <h4 className="text-xl font-semibold -mt-1 -mb-1">Cal23 SM03</h4>
            <p>Maruti Suzuki Alto</p>
          </div>
        </div>

        <div className="flex gap-2 justify-between flex-col items-center">
          <div className="w-full mt-5">
            <div className="flex items-center gap-5 p-3 border-b-2 border-gray-300">
              <MdLocationPin size={22} />
              <div>
                <h4 className="text-lg font-medium ">37/11-A</h4>
                <p className="text-sm -mt-1 text-gray-600">WorkShop Nanded</p>
              </div>
            </div>
            <div className="flex items-center gap-5 p-3">
              <FaMoneyCheck size={22} />

              <div>
                <h4 className="text-lg font-medium ">₹ 193.90</h4>
                <p className="text-sm -mt-1 text-gray-600">Cash Cash</p>
              </div>
            </div>
          </div>
        </div>

        <button className="w-full bg-green-600 text-white font-semibold p-2 rounded-lg mt-2">
          make a payment
        </button>
      </div>
    </div>
  )
}

export default CaptainHome

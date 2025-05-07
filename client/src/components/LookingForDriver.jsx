import React from 'react'
import { RiArrowDownWideFill } from 'react-icons/ri'
import { UberWhiteCar } from '../assets/images'
import { GrMapLocation } from 'react-icons/gr'
import { MdLocationPin } from 'react-icons/md'
import { FaMoneyCheck } from 'react-icons/fa'

const LookingForDriver = (props) => {
  return (
   <div>
        <h5 className="w-full flex justify-center text-center px-2 py-1 mb-5 text-gray-400 ">
          <RiArrowDownWideFill size={20} onClick={()=>props.setVehicleFound(false)}/>
        </h5>
        <h3 className="text-2xl font-semibold mb-5">Looking For the Driver</h3>
        <div className="flex gap-2 justify-between flex-col items-center">
          <img className="h-20" src={UberWhiteCar} alt="" />
          <div className="w-full mt-5">
            <div className="flex items-center gap-5 p-3 border-b-2 border-gray-300">
             
              <GrMapLocation size={22}  />
  
              <div>
                <h4 className="text-lg font-medium ">37/11-A</h4>
                <p className="text-sm -mt-1 text-gray-600">WorkShop Nanded</p>
              </div>
            </div>
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
      </div>
  )
}

export default LookingForDriver

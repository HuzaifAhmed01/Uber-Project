import React from 'react'
import { UberDriver } from '../assets/images'
import { MdOutlineAccessTime, MdOutlineSpeed } from 'react-icons/md'
import { LuNotebook } from 'react-icons/lu'

const CaptainDetails = () => {
  return (
    <div>
         <div  className="flex items-center justify-between">
                 <div className="flex items-center justify-start gap-3">
                   <img className="h-10 w-10 rounded-full object-cover" src={UberDriver} alt="" />
                   <h4 className="text-lg font-medium">Abdul Raheman</h4>
                 </div>  
                 <div>
                   <h4 className="text-xl font-semibold">₹ 220.33</h4>
                   <p className="text-sm text-white font-medium bg-gray-600 p-1 border-0 rounded-full text-center">Earned</p>
                 </div>
               </div>
       
               <div className="flex justify-center gap-5 p-3 mt-6 items-start bg-gray-100 rounded-lg">
                 <div className="text-center flex flex-col items-center pt-3">
                   <MdOutlineAccessTime  size={23}/>
                   <h5 className="text-lg font-medium">10.2</h5>
                   <p className="text-sm text-gray-600">hours online</p>
                 </div>
                 <div className="text-center flex flex-col items-center pt-3">
                   <MdOutlineSpeed  size={23}/>
                   <h5 className="text-lg font-medium">10.2</h5>
                   <p className="text-sm text-gray-600">hours online</p>
                 </div>
                 <div className="text-center flex flex-col items-center pt-3">
                   <LuNotebook  size={23}/>
                   <h5 className="text-lg font-medium">10.2</h5>
                   <p className="text-sm text-gray-600">hours online</p>
                 </div>
               </div>
      
    </div>
  )
}

export default CaptainDetails

import React from 'react'
import { MdLocationPin } from "react-icons/md";

const LocationSearchPanel = () => {
  return (
    <div>
          {/* sample data         */}
       <div className='flex items-center gap-3 my-4 justify-center'>
        <h2 className='bg-[#eee] p-3 rounded-full  '><MdLocationPin size={25}/></h2>
        <h4 className='font-medium'>workshop corner opposite of water tank , Nanded</h4>
       </div>
      



    </div>
  )
}

export default LocationSearchPanel

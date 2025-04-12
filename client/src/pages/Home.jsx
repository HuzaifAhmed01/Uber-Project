import React from 'react'
import { Uberlogo, UberMap } from '../assets/images'


const Home = () => {

const submitHandler = (e) => {
e.preventDefault();










}

  return (
    <div className='h-screen relative '> 
<img className='w-16 absolute top-5 left-5' src={Uberlogo} alt="uberLogo" />     
<div className='w-full h-screen '>
  
  <img className='w-full h-full object-cover' src={UberMap} alt="" />
  </div> 
  <div className=' h-screen flex flex-col justify-end absolute top-0 w-full '>
  <div className='bg-white h-[30%] p-5 relative'>
  <h4 className='text-3xl font-semibold'>Find a trip</h4>
    <form onSubmit={(e)=>submitHandler(e)}>
      <div className="line absolute h-16 w-1 top-[45%] left-10 bg-gray-900 rounded"></div>
      <input className='bg-[#eee]  px-12 py-2 text-lg rounded-lg w-full mt-5' type="text" placeholder='Add a pick up location' />
      <input className='bg-[#eee]  px-12 py-2 text-lg rounded-lg w-full mt-3' type="text" placeholder='Enter your destinition' />
    </form>
  </div>
  <div className=' bg-red-400  h-0'>

  </div>

  </div>
    </div>
  )
}

export default Home

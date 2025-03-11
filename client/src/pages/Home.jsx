import React from 'react'
import { HeroBackground, Uberlogo } from '../assets/images'
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <div
        style={{backgroundImage: `url(${HeroBackground})`}}
        className='bg-cover bg-center w-full h-screen pt-8 flex justify-between flex-col '>
<img src={Uberlogo} className='w-14 ml-8' alt="" />
<div className='bg-white p-4 pb-7'>

  <h2 className='text-2xl font-bold'>Get Started with Uber</h2>
  <Link to="/user-login" className='flex items-center justify-center w-full bg-black text-white  py-3 rounded mt-5  font-semibold '>Continue</Link>

</div>






        </div>
    </div>
  )
}

export default Home

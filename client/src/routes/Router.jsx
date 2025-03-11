import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import UserLogin from '../pages/UserLogin'
import UserRegister from '../pages/UserRegister'
import CaptainLogin from '../pages/CaptainLogin'
import CaptainRegister from '../pages/CaptainRegister'

const Router = () => {
  return (
    <div>
        <Routes>

            <Route path="/" element={<Home/>}/>
            <Route path="/user-login" element={<UserLogin/>}/>
            <Route path="/user-register" element={<UserRegister/>}/>
            <Route path="/captain-login" element={<CaptainLogin/>}/>
            <Route path="/captain-register" element={<CaptainRegister/>}/>

        </Routes>
      
    </div>
  )
}

export default Router

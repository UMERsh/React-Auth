import React from 'react'
import {Routes,Route } from 'react-router-dom'
import ForgotPassword from './ForgotPassword'
import Login from './Login'
import Register from './Register'
import ResetPassword from './ResetPassword'
import Navbar from '../../components/Header/Navbar'

export default function index() {
  return (
     
    <Routes>
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/forgot-password' element={<ForgotPassword/>} />
      <Route path='/reset-password' element={<ResetPassword/>} />
    </Routes>
  )
}

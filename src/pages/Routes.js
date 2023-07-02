import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Frontend from './Frontend'
import Auth from './Auth'
import Navbar from '../components/Header/Navbar'
import Footer from '../components/Footer/Footer'

export default function Index() {
    return (
        <>
          <Navbar />
            <Routes>
                <Route path='/*' element={<Frontend/>} />
                <Route path='/auth/*' element={<Auth/>} />
             
            </Routes>
        <Footer />

        </>
    )

}

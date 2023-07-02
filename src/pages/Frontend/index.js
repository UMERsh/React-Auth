import React from 'react'
import { Routes, Route } from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Home from './Home'
import NoPage from './NoPage'


export default function index() {
    return (
        <>
           
            <main>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='*' element={<NoPage />} />
            </Routes>
            </main>
            
        </>

    )
}
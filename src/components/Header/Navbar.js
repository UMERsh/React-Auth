import { signOut } from 'firebase/auth'
import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import { auth } from '../../Config/firebase'
import { AuthContext } from '../../Context/AuthContext'
export default function Navbar() {

  const {authenticated, setAuthenticated} = useContext(AuthContext)

  const handlLogout =()=>{
    signOut(auth)
    .then(()=>{
      setAuthenticated(false)
      alert("user is logged out!")
    })
    .catch((err)=>{console.log(err)})
    alert("error")

  }

  return (
    <>
<nav class="navbar navbar-expand-lg bg-dark navbar-dark">
  <div class="container-fluid">
    <Link class="navbar-brand" to='/'>HOME</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        {/* <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to='/'>Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/about">About</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/contact">Contact</Link>
        </li> */}
       
         
       
      </ul>
      <form className="d-flex" role="search">
      <Link to='/about' class="btn btn-outline-success mx-2" >About Us</Link>
    <Link to='/auth/register'>  <button type="button" class="btn btn-outline-success mx-2 ">  Register</button></Link>
        <Link to='/auth/login' class="btn btn-outline-success mx-2" >Login</Link>
        
        <Link to='/' className="btn btn-outline-danger mx-2" onClick={handlLogout} >Logout</Link>
      </form>
    </div>
  </div>
</nav>
  
    </>
  )
}

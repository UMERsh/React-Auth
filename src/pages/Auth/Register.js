import React, { useState,useContext } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../Config/firebase'
import { AuthContext } from '../../Context/AuthContext'
import { Link } from 'react-router-dom'
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBCheckbox
}
from 'mdb-react-ui-kit';

const initialState = {
  email: "", 
   password: "",
   confirmPassword: ""
  
}

export default function Register() {
const[state,setState] = useState(initialState)
const {authenticated, setAuthenticated}= useContext(AuthContext)


  const handleChange = (e)=>{
   const {name,value} = e.target
   setState({...state, [name]:value})
   console.log(state)
  }

   const handleSubmit = (e)=>{
    console.log("working")
    e.preventDefault()
   const {email,password} = state
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    
    
    // Signed in 
    const user = userCredential.user;
    setAuthenticated(true)
    alert("User is Created")
    // window.Toastify("User is Registered")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert("error")
    // window.Toastify("Error")
    // ..
  });




   }
   
  
  return (
    <>
 
 <MDBContainer fluid>

<MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
  <MDBCardBody>
    <MDBRow>
      <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

        <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4"><h3>Sign up</h3></p>

       

        <div className="d-flex flex-row align-items-center mb-4">
          <MDBIcon fas icon="envelope me-3" size='lg'/>
          <MDBInput label='Your Email' id='form2' type='email' onChange={handleChange}/>
        </div>

        <div className="d-flex flex-row align-items-center mb-4">
          <MDBIcon fas icon="lock me-3" size='lg'/>
          <MDBInput label='Password' id='form3' type='password' onChange={handleChange}/>
        </div>

        <div className="d-flex flex-row align-items-center mb-4">
          <MDBIcon fas icon="key me-3" size='lg'/>
          <MDBInput label='Conform password' id='form4' type='password' onChange={handleChange}/>
        </div>

        <div className='mb-4'>
          <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
        </div>

        <MDBBtn className='mb-4' size='lg' onSubmit={handleSubmit}>Register</MDBBtn>

      </MDBCol>

      <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
        <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid/>
      </MDBCol>

    </MDBRow>
  </MDBCardBody>
</MDBCard>

</MDBContainer>
      
    </>
    );



  
}

import React, { useContext, useState } from 'react'
import {Link} from 'react-router-dom'
import { AuthContext } from '../../Context/AuthContext'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../Config/firebase'
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput,
  

}
from 'mdb-react-ui-kit';


const initialState = {
  email : "",
  password : ""
}




export default function Login() {
  const [state,setState] = useState(initialState)
  const {authenticated,setAuthenticated} = useContext(AuthContext)
 

  const handleChange = (e)=>{
    const {name,value} =  e.target 
   setState({...state, [name]:value})
   console.log(state)

  }
  const handleSubmit = (e)=>{
    console.log("working")
    e.preventDefault()
     const {email,password} = state

     signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    setAuthenticated(true)
    alert("user is logged in")
    console.log(state)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert("Something went wrong! Try again")
  });

  }
  return (
    <>
       <MDBContainer fluid>

<MDBRow className='d-flex justify-content-center align-items-center'>

  <MDBCol lg='8'>

    <MDBCard className='my-5 rounded-3' style={{maxWidth: '600px'}}>
      <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img3.webp' className='w-100 rounded-top'  alt="Sample photo"/>

      <MDBCardBody className='px-5'>

        <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">Login Form</h3>
        <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='text' onChange={handleChange} />
        <MDBRow>

        <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password' onChange={handleChange}/>
        </MDBRow>

       
   

        <MDBBtn color='success' className='mb-4' size='lg' onSubmit={handleSubmit}>Login</MDBBtn>

      </MDBCardBody>
    </MDBCard>

  </MDBCol>
</MDBRow>

</MDBContainer>



















      {/* <section className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card bg-dark text-white" style={{borderRadius: '1rem'}}>
                <div className="card-body p-5 text-center">
                  <div className="mb-md-5 mt-md-4 pb-5">
                    <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                    <p className="text-white-50 mb-5">Please enter your login and password!</p>
                    <div className="form-outline form-white mb-4">
                      <input type="email" id="typeEmailX" className="form-control form-control-lg" onChange={handleChange} />
                      <label className="form-label" htmlFor="typeEmailX" >Email</label>
                    </div>
                    <div className="form-outline form-white mb-4">
                      <input type="password" id="typePasswordX" className="form-control form-control-lg" onChange={handleChange} />
                      <label className="form-label" htmlFor="typePasswordX" >Password</label>
                    </div>
                    <p className="small mb-5 pb-lg-2"><a className="text-white-50" href="#!" onChange={handleChange}>Forgot password?</a></p>
                    <button className="btn btn-outline-light btn-lg px-5" type="submit" onClick={handleSubmit}>Login</button>
                    <button className="btn btn-outline-primary btn-lg px-5 text-decoration-none" type="submit"  > <Link to="/navbar" className='text-decoration-none text-white'>Go Back</Link> </button>
                    <div className="d-flex justify-content-center text-center mt-4 pt-1">
                      <a href="#!" className="text-white"><i className="fab fa-facebook-f fa-lg" /></a>
                      <a href="#!" className="text-white"><i className="fab fa-twitter fa-lg mx-4 px-2" /></a>
                      <a href="#!" className="text-white"><i className="fab fa-google fa-lg" /></a>
                    </div>
                  </div>
                  <div>
                    <p className="mb-0">Don't have an account? <Link to="/auth/register" className="text-white-50 fw-bold">Sign Up</Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    );



    </>
  )
}

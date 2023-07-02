import React, {useState, useEffect, createContext } from 'react'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../Config/firebase';


export const AuthContext=createContext();

export default function AuthContextProvider(props) {
    
const [authenticated, setAuthenticated] = useState(false)
const [user, setUser] = useState({})

useEffect(() => {

    onAuthStateChanged(auth, (user) => {
      if (user) {

        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        setAuthenticated(true)
        setUser(user)
        const uid = user.uid;
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
}, [])

  return (
     <AuthContext.Provider value={{authenticated,setAuthenticated,user}}>

        {props.children}
     </AuthContext.Provider>
  )
}
 
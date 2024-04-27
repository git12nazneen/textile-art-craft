import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword,   getAuth,   onAuthStateChanged,   signInWithEmailAndPassword } from "firebase/auth";
import { app } from '../../firebase.config';
export const AuthContext = createContext(null)
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

      // create user
      const createUser = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // sign in user
    const signIn = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

     // observer
     useEffect( ()=>{
        const unSubscribe = onAuthStateChanged(auth, createUser =>{
              console.log('user in the auth state', createUser);
              setUser(createUser);
              setLoading(false)
          });
          return() =>{
              unSubscribe();
          }
      })
  

    const authInfo = {
        user,
        createUser,
        signIn,
        loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
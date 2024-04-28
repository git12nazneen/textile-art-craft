import React, { createContext, useEffect, useState } from 'react';
import {GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword,   getAuth,   onAuthStateChanged,   signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from '../../firebase.config';
import swal from 'sweetalert';
export const AuthContext = createContext(null)
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const githubProvider = new GithubAuthProvider();
    const googleProvider = new GoogleAuthProvider();

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

    // google login
    const googleLogin = () =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    // github login
    const githubLogin = () =>{
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }

        // update user profile
        const updateUserProfile = (name, image) =>{
            return updateProfile(auth.currentUser, {
                 displayName: name,
                  photoURL: image
               }).then(() => {
                 // Profile updated!
                 // ...
               }).catch((error) => {
                 // An error occurred
                 // ...
               });
         }
        
         const logOut = () =>{
            return signOut(auth)
            swal('logout successfully')
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
        loading,
        updateUserProfile,
        googleLogin,
        githubLogin,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
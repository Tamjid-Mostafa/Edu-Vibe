import React, { createContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithPopup, signOut} from 'firebase/auth';
import app from '../../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);


  useEffect( () => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
      console.log('user inside state changed', currentUser);
      setUser(currentUser);
    });

    return () => {
      unsubscribe();
    }


  }, [])



  /* Google Sign In  */
  const providerGoogleSignIn = (provider) => {
    return signInWithPopup(auth, provider);
  }

  /* GitHub Sign In */
  const providerGithubSignIn = (provider) => {
    return signInWithPopup(auth, provider)
  }

  /* Sign Out */
  const providerSignOut = () => {
    return signOut(auth);
  }

  /* Sign In with Email & Password */
  const providerCreateUser = () => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const authInfo = { user, providerGoogleSignIn, providerGithubSignIn, providerSignOut };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

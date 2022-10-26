import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        console.log('inside auth state change', currentUser);

        if(currentUser === null || currentUser.emailVerified){
            setUser(currentUser);
        }
        setLoading(false);
    });

    return () => {
        unsubscribe();
    }

}, []);

  /* Google Sign In  */
  const providerGoogleSignIn = (provider) => {
    return signInWithPopup(auth, provider);
  };

  /* GitHub Sign In */
  const providerGithubSignIn = (provider) => {
    return signInWithPopup(auth, provider);
  };

  /* Sign Out */
  const providerSignOut = () => {
    return signOut(auth);
  };

  /* Register with Email & Password */
  const providerCreateUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const updateUserProfile = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };
  /* Log In with Email Password */
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
}
/* Email Verification */
const verifyEmail = () =>{
  return sendEmailVerification(auth.currentUser);
}

/* Forgot Password */
const providerForgotPassword = (email) => {
  return sendPasswordResetEmail(auth, email);
};

  const authInfo = {
    user,
    loading, 
    setLoading,
    providerGoogleSignIn,
    providerGithubSignIn,
    providerCreateUser,
    providerSignOut,
    updateUserProfile,
    signIn,
    verifyEmail,
    providerForgotPassword,
    
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

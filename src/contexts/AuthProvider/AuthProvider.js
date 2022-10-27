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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setLoading(false);
        setUser(currentUser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  /* Google Sign In  */
  const providerGoogleSignIn = (provider) => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  /* GitHub Sign In */
  const providerGithubSignIn = (provider) => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  /* Sign Out */
  const providerSignOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  /* Register with Email & Password */
  const providerCreateUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const updateUserProfile = (profile) => {
    setLoading(true);
    return updateProfile(auth.currentUser, profile);
  };
  /* Log In with Email Password */
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  /* Email Verification */
  const verifyEmail = () => {
    setLoading(true);
    return sendEmailVerification(auth.currentUser);
  };

  /* Forgot Password */
  const providerForgotPassword = (email) => {
    setLoading(true);
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

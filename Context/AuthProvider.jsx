"use client";
import React, { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../Firebase/firebase.init";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user,setUser]=useState(null);
  const [loading,setLoading]=useState(true);

  const provider = new GoogleAuthProvider();
  const GoogleLogin =()=>{
    return signInWithPopup(auth, provider)
  }
 const createUser =(email,password) =>{
  return createUserWithEmailAndPassword(auth, email, password)
 }

 const Login =(email,password)=>{
  return signInWithEmailAndPassword(auth, email, password)
 }
  const logout = () => {
    return signOut(auth);
  };

 useEffect(()=>{
  const unsubscribe = onAuthStateChanged(auth, (user)=>{
    setUser(user);
    setLoading(false);
  });
  return()=>{
    unsubscribe()
  }

 },[])


  const AuthInfo = {
    Login,
    logout,
    GoogleLogin,
    createUser,
    setUser,
    user,
    loading,
  };

  return <AuthContext value={AuthInfo}>{children}</AuthContext>;
};

export default AuthProvider;

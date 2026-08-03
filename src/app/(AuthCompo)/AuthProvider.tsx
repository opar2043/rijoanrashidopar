"use client";

import { 
  createUserWithEmailAndPassword, 
  GoogleAuthProvider, 
  onAuthStateChanged, 
  sendPasswordResetEmail, 
  signInWithEmailAndPassword, 
  signInWithPopup, 
  signOut 
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "./firebase.config";
import api from "@/service/api";

export const AuthContext = createContext<any>(null);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const provider = new GoogleAuthProvider();

  // Register new user
  const handleRegister = (email: string, pass: string) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, pass);
  };

  // Login existing user
  const handleLogin = (email: string, pass: string) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, pass);
  };

  // Google login
  const handleGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  // Logout
  const handleLogout = () => {
    setLoading(true);
    return signOut(auth);
  };

  // Password reset
  const resetPass = (email: string) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email);
  };

  // Sync user with backend
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      
      if (currentUser) {
        const userInfo = {
          name: currentUser.displayName,
          email: currentUser.email,
          photo: currentUser.photoURL,
        };
        
        try {
          // Post user info to users route (role is managed server-side,
          // existing roles are never overwritten)
          await api.post('/users', userInfo);
          
          // Fetch user role from backend to support admin check
          const res = await api.get(`/users/${currentUser.email}`);
          if (res.data) {
            setUser({ ...currentUser, role: res.data.role });
          }
        } catch (error) {
          console.error("Error syncing user:", error);
        }
      }
      
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const value = {
    user,
    loading,
    handleRegister,
    handleLogin,
    handleLogout,
    handleGoogle,
    resetPass,
    setUser,
  };

  return (
    <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
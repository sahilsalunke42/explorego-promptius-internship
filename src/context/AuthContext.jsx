// Authcontext for managing authentication state of login logout and signup
import React, { createContext, useState, useContext } from 'react';
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const login = (userData) => {
    setUser(userData);
    setIsAuthenticated(true);
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthContext;

// src/context/AuthContext.jsx
// This file provides the AuthContext for managing authentication state in the application.
// It includes the AuthProvider component to wrap the application and provide authentication state,
// as well as the useAuth hook for accessing authentication state in components.

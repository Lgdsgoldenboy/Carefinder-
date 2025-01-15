// src/context/AuthContext.tsx
import React, { createContext, useContext, useState } from 'react';

interface User {
  email: string;
  name?: string; // Optional name field
}

interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null; // Add user state
  login: (userData: User) => void; // Update login function to accept user data
  logout: () => void; // Logout function
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | null>(null); // Initialize user state

  const login = (userData: User) => {
    setIsAuthenticated(true);
    setUser(userData); // Set user data on login
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null); // Clear user data on logout
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
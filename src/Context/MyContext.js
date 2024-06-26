import React, { createContext, useState } from 'react';
import axios from 'axios';
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (username, password) => {
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', { username, password });
      // Handle response
      console.log(response.data,'context login');
      setUser(response.data.user)
      return response.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  const signup = async (username, password, email) => {
    try {
      await axios.post('http://localhost:5000/api/auth/register', { username, password , email});
    } catch (error) {
      console.error(error);
    }
  };


  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };

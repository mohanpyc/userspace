import React, { createContext, useState } from 'react';
import axios from 'axios';
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (username, password) => {
    try {
      const response = await axios.post('http://localhost:5000/login', { username, password });
      setUser({ username: response.data.username });
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  const signup = async (username, password) => {
    try {
      await axios.post('http://localhost:5000/signup', { username, password });
      setUser({ username });
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

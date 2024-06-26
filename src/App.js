import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './Context/MyContext';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Home from './Components/Home/home';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path='/home' element={<Home/>}/>
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;

import React, { useContext } from 'react';
import { AuthContext } from '../Context/MyContext';

const Home = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <div>
      {user ? (
        <div>
          <h2>Welcome, {user.username}!</h2>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <h2>Please login or signup</h2>
      )}
    </div>
  );
};

export default Home;

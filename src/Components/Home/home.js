import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Context/MyContext';
import { useNavigate } from 'react-router';
import { Button, Input } from '../../MUIComponents';

const Home = () => {
  const { user, logout } = useContext(AuthContext);
  const [task, setTask] = useState('');
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate('/login')
    logout()
  }

  const handleSaveTodo = () => {
    
  }

  console.log(user,'user in home')
  return (
    <div>
        <div>
          <h2>Welcome, {user?.username}!</h2>
          <button onClick={handleLogout}>Logout</button>
        </div>
        <div>
          <h3>Your To Do List</h3>
          <div >
           <Input value={task} size='small' onChange={(e)=>setTask(e?.target?.value)}/> <Button>save</Button>
          </div>
          
        </div>

    </div>
  );
};

export default Home;

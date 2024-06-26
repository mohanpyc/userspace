import React, { useState, useContext } from 'react';
import { AuthContext } from '../../Context/MyContext';
import { useNavigate } from 'react-router-dom';
import { Button, Grid, Input } from '../../MUIComponents';
import { CustomGrid, CustomCard, CustomCardContent, CustomCardActions } from './style';


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email,setEmail] = useState('');

  const { login, signup } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    const success = await login(username, password);
    if (success) {
      navigate('/home'); // Replace '/home' with your desired route
    }
  };

  const navigateSignup = () => {
    navigate('/signup');
  }


  return <CustomGrid>
    <CustomCard>
      <CustomCardContent>
        <Grid container direction="column" alignItems="center" spacing={2}>
          <Grid item>
            <Input placeholder="Username"  onChange={(e)=>setUsername(e.target.value)}/>
          </Grid>
          <Grid item>
            <Input placeholder="Password"   onChange={(e)=>setPassword(e.target.value)}/>
          </Grid>
        </Grid>
      </CustomCardContent>
      <CustomCardActions >
        <Button onClick={handleSubmit}>Login</Button>
        <Button>Forgot Password</Button>
        <Button onClick={navigateSignup}>Signup</Button>
      </CustomCardActions>
    </CustomCard>
  </CustomGrid>
};

export default Login;

import React, { useState, useContext } from 'react';
import { AuthContext } from '../../Context/MyContext';
import { Button, Grid, Input } from '../../MUIComponents';
import { CustomGrid, CustomCard, CustomCardContent, CustomCardActions } from './style';
import { useNavigate } from 'react-router';

const Signup = () => {
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email,setEmail] = useState('');
  const { signup } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    await signup(username, password, email);
    navigate('/login');
  };

  const handleGoBack = () => {
    navigate('/login')
  }

  return (
    <CustomGrid>
    <CustomCard>
      <CustomCardContent>
        <Grid container direction="column" alignItems="center" spacing={2}>
          <Grid item>
            <Input placeholder="Username" onChange={(e)=>setUsername(e.target.value)} />
          </Grid>
          <Grid item>
          <Input placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
          </Grid>
          <Grid item>
            <Input placeholder="email-id"  onChange={(e)=>setEmail(e.target.value)}/>
          </Grid>
        </Grid>
      </CustomCardContent>
      <CustomCardActions >
        <Button onClick={handleSubmit}>Signup</Button>
        <Button onClick={handleGoBack}>Go Back</Button>
      </CustomCardActions>
    </CustomCard>
  </CustomGrid>
  );
};

export default Signup;

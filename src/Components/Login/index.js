import React, { useState, useContext } from 'react';
import { AuthContext } from '../../Context/MyContext';
import { useNavigate } from 'react-router-dom';
import { Button, Grid, Input , Card, CardActions, CardContent } from '../../MUIComponents';
import {LoginPageStyles} from './style'
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    const success = await login(username, password);
    if (success) {
      navigate('/'); // Replace '/home' with your desired route
    }
  };
  const classes = LoginPageStyles();


  return <Grid className={classes.Grid}>
         <Card>
          <CardContent>
           <Input />
           <Input />
          </CardContent>
          <CardActions> 
              <Button>Login</Button>
          </CardActions>
        </Card> 
  </Grid>
};

export default Login;

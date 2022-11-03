import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import { IconButton, Typography, InputLabel, OutlinedInput, InputAdornment, Card, Button } from '@mui/material';
import Icon from '@mui/material/Icon';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import React from 'react';
import { Stack } from '@mui/system';
import Box from '@mui/system';
import './style.css';

function Login(){
    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };
    
      const [values, setValues] = React.useState({
        password: '',
        showPassword: false,
      });
    
      const handleClickShowPassword = () => {
        setValues({
          ...values,
          showPassword: !values.showPassword,
        });
      }

    return (
        <div className="App">
        <Stack 
            direction="column" 
            justifyContent="center" 
            alignItems="center" 
            spacing={2} 
            sx={{ p: 5}}
        >
        <Typography variant='h3'>Login Form</Typography>

        <FormControl variant="outlined">
            <InputLabel htmlFor="outlined-adornment-username">Username</InputLabel>
              <OutlinedInput
                required
                id='outlined-required'
                label='Username'
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton edge="end">
                      {<AccountCircleIcon />}
                    </IconButton>
                  </InputAdornment>
                }
              />
        </FormControl>
    
        <FormControl variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput
                id="outlined-adornment-password"
                type={values.showPassword ? 'text' : 'password'}
                value={values.password}
                label='Password'
                onChange={handleChange('password')}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {values.showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                    </IconButton>
                  </InputAdornment>
                }
            />
            </FormControl>   

            <Button variant="contained" size="large" onClick={() => {alert('You are logged in!')}}>
                LOGIN
            </Button>   
                    
          </Stack>
        </div>
      );
};

export default Login;
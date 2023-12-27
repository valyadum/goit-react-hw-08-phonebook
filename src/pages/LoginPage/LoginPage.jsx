import { Box, Button, TextField } from '@mui/material';
import React from 'react'
import { useDispatch } from 'react-redux';
import { login } from 'store/auth/operation';


const LoginPage = () => {
  const dispatch = useDispatch();
  function logIn(event) {
    event.preventDefault();
        const form = event.currentTarget;
        const user = {
          email: form.elements.email.value,
          password: form.elements.password.value,
        };
        dispatch(login(user));
        form.reset();
  }
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '200px',
      }}
      noValidate
      onSubmit={logIn}
    >
      
      <TextField

        label="Email"
        variant="standard"
        type="email"
        name="email"
        sx={{ backgroundColor: 'none' }}
      />
      <TextField
        // id="standard-basic"
        label="Password"
        variant="standard"
        type="password"
        name="password"
        sx={{ backgroundColor: 'none' }}
      />
      <Button
        variant="contained"
        type="submit"
      >
        Log In
      </Button>
    </Box>

  );
}

export default LoginPage
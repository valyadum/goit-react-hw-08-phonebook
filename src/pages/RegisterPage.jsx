
import { Box, Button, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { register } from 'store/auth/operation';

const RegisterPage = () => {
  const dispatch = useDispatch();

  function onAddUser(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const newUser = {
      name: form.elements.name.value,
      email: form.elements.email.value,
      password: form.elements.password.value,
    };
     dispatch(register(newUser));
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
      onSubmit={onAddUser}
    >
      <TextField
        label="Name"
        variant="standard"
        type="name"
        name="name"
        autoComplete="useName"
      />
      <TextField
        label="Email"
        variant="standard"
        type="email"
        name="email"
        autoComplete="useName"
      />
      <TextField
        // id="standard-basic"
        label="Password"
        variant="standard"
        type="password"
        name="password"
        autoComplete="current-password"
        sx={{ backgroundColor: 'none' }}
      />
      <Button variant="contained" type="submit">
        Register
      </Button>
    </Box>
    // <form onSubmit={onAddUser} autoComplete="off">
    //   <label>
    //     Name
    //     <input type="text" name="name" autoComplete="userName" />
    //   </label>
    //   <label>
    //     Email
    //     <input type="email" name="email" autoComplete="useName" />
    //   </label>
    //   <label>
    //     Password
    //     <input
    //       type="password"
    //       name="password"
    //       autoComplete="current-password"
    //     />
    //   </label>
    //   <button type="submit">Register</button>
    // </form>
  );
};

export default RegisterPage;

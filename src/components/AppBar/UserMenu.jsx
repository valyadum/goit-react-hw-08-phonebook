import {  MenuItem, Typography } from '@mui/material';
import { useAuth } from 'hooks/useAuthe'
import React from 'react'
import { useDispatch } from 'react-redux'
import { logOut } from 'store/auth/operation';

const UserMenu = ({
  handleCloseUserMenu,
}) => {

  const dispatch = useDispatch();
  const { user } = useAuth();
  return (

        <MenuItem onClick={handleCloseUserMenu}>
          <Typography textAlign="center">
            {user.email} <br />
            <button type="button" onClick={() => dispatch(logOut())}>
              Logout
            </button>
          </Typography>
        </MenuItem>

  );
};

export default UserMenu
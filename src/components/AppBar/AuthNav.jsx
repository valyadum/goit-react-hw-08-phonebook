import { MenuItem, Typography } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';

export const AuthNav = ({
  handleCloseUserMenu,
}) => {
  return (
    <div>
      <MenuItem onClick={handleCloseUserMenu}>
        <Typography textAlign="center">
          <NavLink
            to="/register"
            style={{
              color: '#6B728E',
              textDecoration: 'none',
              fontWeight: 600,
            }}
          >
            Register
          </NavLink>
        </Typography>
      </MenuItem>
      <MenuItem onClick={handleCloseUserMenu}>
        <Typography textAlign="center">
          <NavLink
            to="/login"
            style={{
              color: '#6B728E',
              textDecoration: 'none',
              fontWeight: 600,
            }}
          >
            Log In
          </NavLink>
        </Typography>
      </MenuItem>
    </div>
  );
};

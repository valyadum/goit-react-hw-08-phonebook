import { MenuItem, Typography } from '@mui/material';
import { useAuth } from 'hooks/useAuthe';
import React from 'react'
import { NavLink } from 'react-router-dom'

const NavigationPhone = ({ closeMenu }) => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <MenuItem onClick={closeMenu}>
        <Typography textAlign="center">
          <NavLink
            to="/"
            style={{
              color: '#6B728E',
              textDecoration: 'none',
              fontWeight: 600,
            }}
          >
            Home
          </NavLink>
        </Typography>
      </MenuItem>
      <MenuItem onClick={closeMenu}>
        <Typography textAlign="center">
          {isLoggedIn && (
            <NavLink
              to="/contacts"
              style={{
                color: '#6B728E',
                textDecoration: 'none',
                fontWeight: 600,
              }}
            >
              Contacts
            </NavLink>
          )}
        </Typography>
      </MenuItem>
    </>
  );
};

export default NavigationPhone
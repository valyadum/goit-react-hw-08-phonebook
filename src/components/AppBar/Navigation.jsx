import { Button } from '@mui/material';
import { useAuth } from 'hooks/useAuthe';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = ({ handleCloseNavMenu }) => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <Button
        onClick={handleCloseNavMenu}
        sx={{ my: 2, color: 'main', display: 'block' }}
      >
        <NavLink
          to="/"
          style={{ color: 'white', textDecoration: 'none', fontWeight: 600 }}
        >
          Home
        </NavLink>
      </Button>
      <Button
        onClick={handleCloseNavMenu}
        sx={{ my: 2, color: 'white', display: 'block' }}
      >
        {isLoggedIn && (
          <NavLink
            to="/contacts"
            style={{ color: 'white', textDecoration: 'none', fontWeight: 600 }}
          >
            Contacts
          </NavLink>
        )}
      </Button>
    </>
  );
};

export default Navigation;

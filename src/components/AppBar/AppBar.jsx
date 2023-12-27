import {
  AppBar,
  Avatar,
  Box,
  IconButton,
  Menu,
  Toolbar,
  Tooltip,
  Typography,
} from '@mui/material';
import { AuthNav } from 'components/AppBar/AuthNav';
import Navigation from 'components/AppBar/Navigation';
import UserMenu from 'components/AppBar/UserMenu';
import { useAuth } from 'hooks/useAuthe';
import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import NavigationPhone from 'components/AppBar/NavigationPhone';
import { ModalForm } from 'components/ContactForm/ModalForm';
import SearchAppBar from 'components/Serch';


const AppBarF = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = event => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const { isLoggedIn } = useAuth();
  return (
    <AppBar position="static" sx={{ backgroundColor: '#404258' }}>
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: 'block', md: 'none' },
            }}
          >
            <NavigationPhone closeMenu={handleCloseNavMenu} />
          </Menu>
        </Box>
        <LocalPhoneIcon sx={{ display: { xs: 'none', md: 'flex' } }} />
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="#app-bar-with-responsive-menu"
          sx={{
            mr: 2,
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
            textTransform: 'uppercase',
          }}
        >
          Phonebook
        </Typography>
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          <Navigation handleCloseNavMenu={handleCloseNavMenu} />
        </Box>
        {isLoggedIn && <SearchAppBar/>}
        {isLoggedIn && <ModalForm />}
        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt="Me" src="/static/images/avatar/2.jpg" />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: '45px' }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {isLoggedIn ? (
              <UserMenu
                props={(handleOpenUserMenu, anchorElUser, handleCloseUserMenu)}
              />
            ) : (
              <AuthNav
                props={(handleOpenUserMenu, anchorElUser, handleCloseUserMenu)}
              />
            )}
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default AppBarF;

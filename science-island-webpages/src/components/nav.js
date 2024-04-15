import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import Logo from '../images/logo.png';
import { Link } from 'react-router-dom'; 
import '../stylesheets/global.css'

function Nav() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Link to="/">
          <img src={Logo} style={{ maxWidth: '100px', maxHeight: '100px' }} />
          </Link>
          <Typography variant='h6'>
            <Link to="/about" className='nav-link'>
              About
            </Link>
          </Typography>
          <Typography variant='h6'>
            <Link to="/about" className='nav-link'>
              This needs some work
            </Link>
          </Typography>
          <Typography variant='h6'>
            <Link to="/loginas" className='nav-link'>
              Login
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
  </div>

  );
}

export default Nav;

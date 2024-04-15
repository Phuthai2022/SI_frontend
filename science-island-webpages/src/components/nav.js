import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import Logo from '../images/logo.png'

function Nav() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <img src={Logo} style={{ maxWidth: '100px', maxHeight: '100px' }} />
        </Toolbar>
      </AppBar>
      {/* Other content of your app */}
  </div>

  );
}

export default Nav;

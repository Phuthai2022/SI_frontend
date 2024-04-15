//navigation bar 

import React from 'react';
import { AppBar, Toolbar, Button, Typography, IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

function NavBar() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const navList = (
        <div className="flex flex-grow items-center justify-center lg:justify-start">
            <Typography variant="body1" color="textSecondary" sx={{ mr: 2 }}>
                <Link to='/'>ScienceIsland</Link>
            </Typography>
            <Typography variant="body1" color="textSecondary" sx={{ mr: 2 }}>
                <Link to='/'>menu1</Link>
            </Typography>
            <Typography variant="body1" color="textSecondary">
                <Link to='/'>menu2</Link>
            </Typography>
        </div>
    );

    return (
        <AppBar position="static">
            <Toolbar>
                {navList}
                <div>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        onClick={handleMenuClick}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleMenuClose}
                    >
                        <MenuItem onClick={handleMenuClose}>
                            <Link to='/'>Home</Link>
                        </MenuItem>
                        <MenuItem onClick={handleMenuClose}>
                            <Link to='/'>Menu 1</Link>
                        </MenuItem>
                        <MenuItem onClick={handleMenuClose}>
                            <Link to='/'>Menu 2</Link>
                        </MenuItem>
                    </Menu>
                </div>
                <Button color="inherit" component={Link} to="/loginas">
                    Sign In
                </Button>
            </Toolbar>
        </AppBar>
    );
}

export default NavBar;

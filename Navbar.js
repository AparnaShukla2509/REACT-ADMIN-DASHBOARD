import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import ThemeToggle from './ThemeToggle';

const Navbar = () => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" style={{ flexGrow: 1 }}>
        Admin Dashboard
      </Typography>
      <ThemeToggle />
    </Toolbar>
  </AppBar>
);

export default Navbar;

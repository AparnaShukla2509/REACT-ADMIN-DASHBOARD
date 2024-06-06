import React from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemText } from '@mui/material';

const Sidebar = () => (
  <List>
    <ListItem button component={Link} to="/">
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button component={Link} to="/charts">
      <ListItemText primary="Charts" />
    </ListItem>
    <ListItem button component={Link} to="/tables">
      <ListItemText primary="Tables" />
    </ListItem>
    <ListItem button component={Link} to="/calendar">
      <ListItemText primary="Calendar" />
    </ListItem>
    <ListItem button component={Link} to="/kanban">
      <ListItemText primary="Kanban Board" />
    </ListItem>
  </List>
);

export default Sidebar;

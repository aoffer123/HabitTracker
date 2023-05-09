import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,

} from './NavbarElements';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ListIcon from '@mui/icons-material/List';
import ChecklistRtlIcon from '@mui/icons-material/ChecklistRtl';
import DashboardIcon from '@mui/icons-material/Dashboard';

import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Stack direction="row" spacing={2}>
      <Paper>
        <Nav>
        <MenuList>
        <NavLink to='./Home' underline="always">
          <MenuItem onClick={handleClick}>
         <DashboardIcon/>Home</MenuItem>
        </NavLink>
        <NavLink to='./habit' underline="always">
          <MenuItem onClick={handleClick}><ChecklistRtlIcon/>Habits</MenuItem>
        </NavLink>
        <NavLink to='./doing' underline="always">
          <MenuItem onClick={handleClick}><ListIcon/>Manage Habit</MenuItem>
        </NavLink>
        <NavLink NavLink to='./profile' underline="always">
          <MenuItem onClick={handleClick}>
            <AccountCircleIcon />Profile
          </MenuItem>
        </NavLink>
        </MenuList>
        </Nav>
      </Paper>
    </Stack>



  );

}

export default Navbar;
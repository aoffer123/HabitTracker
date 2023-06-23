import React, { useState } from 'react';
import {
  NavLink,
} from './NavbarElements';
import { styled, useTheme } from '@mui/material/styles';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ListIcon from '@mui/icons-material/List';
import ChecklistRtlIcon from '@mui/icons-material/ChecklistRtl';
import DashboardIcon from '@mui/icons-material/Dashboard';
import Button from '@mui/material/Button';
//import MenuItem from '@mui/material/MenuItem';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
// import MenuList from '@mui/material/MenuList';
// import Stack from '@mui/material/Stack';
// import Paper from '@mui/material/Paper';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';
// import HorizontalSplitIcon from '@mui/icons-material/HorizontalSplit';
// import Menu from '@mui/material/Menu';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
//import { purple } from '@mui/material/colors';
const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

//const primary = purple[500];  #f44336


const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 0),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));


const Navbar = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };


  return (
    <Box sx={{ display: 'flex' }}>5

      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 1, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6"  component="div" sx={{ flexGrow: 1 }}>
            Menu
          </Typography>
          <NavLink to='./Logout' underline="always">
          <Button color="inherit">Logout</Button>
          </NavLink>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <List>
        <NavLink to='./Home' underline="always">
          <ListItem disablePadding>
          <ListItemButton sx={{ height: 56 }}>
            <ListItemIcon>
            <DashboardIcon />Home</ListItemIcon>
          </ListItemButton>
          </ListItem>
        </NavLink>
        <Divider />
        
        <NavLink to='./habit' underline="always">
        <ListItem disablePadding>
        <ListItemButton sx={{ height: 56 }}>
          <ListItemIcon><ChecklistRtlIcon />Habits</ListItemIcon>
          </ListItemButton>
          </ListItem>
        </NavLink>
        <Divider />
        <NavLink to='./doing' underline="always">
        <ListItem disablePadding>
        <ListItemButton sx={{ height: 56 }}>
          <ListItemIcon><ListIcon />Manage Habit</ListItemIcon>
          </ListItemButton>
          </ListItem>
        </NavLink>
        <Divider />
        <NavLink NavLink to='./profile' underline="always">
        <ListItem disablePadding>
        <ListItemButton sx={{ height: 56 }}>
          <ListItemIcon>
            <AccountCircleIcon />Profile</ListItemIcon>
            </ListItemButton>
          </ListItem>
        </NavLink>
        </List>
       
        
      </Drawer>
      <Main open={open}>
        <DrawerHeader />

      </Main>

    </Box>




  );

}

export default Navbar;
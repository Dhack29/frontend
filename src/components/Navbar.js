import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Avatar } from '@mui/material';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleCampaignClick = () => {
    if (user) {
      navigate('/campaigns');
    } else {
      navigate('/login');
    }
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          CRM System
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Button color="inherit" component={RouterLink} to="/dashboard">
            Dashboard
          </Button>
          <Button color="inherit" component={RouterLink} to="/customers">
            Customers
          </Button>
          <Button color="inherit" component={RouterLink} to="/orders">
            Orders
          </Button>
          <Button 
            color="inherit" 
            onClick={handleCampaignClick}
          >
            Campaigns
          </Button>
          {user ? (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Avatar
                src={user.picture}
                alt={user.name}
                sx={{ width: 32, height: 32 }}
              />
              <Typography variant="body2">{user.name}</Typography>
              <Button color="inherit" onClick={logout}>
                Logout
              </Button>
            </Box>
          ) : (
            <Button color="inherit" component={RouterLink} to="/login">
              Login
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar; 
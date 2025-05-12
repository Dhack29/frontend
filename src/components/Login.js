import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, Container, Paper } from '@mui/material';

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLoginSuccess = async (credentialResponse) => {
    try {
      await login(credentialResponse);
      navigate('/campaign');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Paper elevation={3} sx={{ p: 4, width: '100%' }}>
          <Typography component="h1" variant="h5" align="center" gutterBottom>
            Welcome to CRM
          </Typography>
          <Typography variant="body2" align="center" color="text.secondary" sx={{ mb: 3 }}>
            Please sign in to access campaigns
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <GoogleLogin
              onSuccess={handleLoginSuccess}
              onError={() => {
                console.log('Login Failed');
              }}
            />
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default Login; 
import React from 'react';
import './index.css';
import App from './App';
import Login from './Login';
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

const Copyright = () => {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {"Copyright ⓒ"}
            fsoftwareengineer, {new Date().getFullYear()}
        </Typography>
    );
}

const AppRouter = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/" element={<App/>} />
                </Routes>
                <Box mt={5}>
                    <Copyright/>
                </Box>
            </BrowserRouter>
        </div>
    )
}

export default AppRouter;
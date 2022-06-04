import React from 'react';
import './index.css';
import App from './App';
import Login from './Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Box from '@mui/material'
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
            <Router>
                <div>
                    <Switch>
                        <Route path="/login">
                            <Login />
                        </Route>
                        <Route path="/">
                            <App />
                        </Route>
                    </Switch>
                </div>
                <Box mt={5}>
                    <Copyright/>
                </Box>
            </Router>
        </div>
    )
}

export default AppRouter;
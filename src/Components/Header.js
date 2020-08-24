import React from 'react';
import { makeStyles, AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import About from './About';
import Body from './Body';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(1),
    },
    title: {
        flexGrow: 1,
    },
    link: {
        textDecoration: 'none'
    },
    font: {
        color: '#FFFFFF'
    }
}));

export default function Header() {
    const classes = useStyles();

    return (
        <Router>
            <div className={classes.root}>
                <AppBar position="static" color="primary">
                    <Toolbar>
                        <WbSunnyIcon edge="start" className={classes.menuButton} color="inherit" />
                        <Typography variant="h6" className={classes.title}>
                            Weather App
                        </Typography>
                        <Link to="/weather-app" className={classes.link}>
                            <Button className={classes.font}>HOME</Button>
                        </Link>
                        <Link to="about" className={classes.link}>
                            <Button className={classes.font}>ABOUT</Button>
                        </Link>
                    </Toolbar>
                </AppBar>
            </div>
            <Switch>
                <Route path="/about">
                    <About/>
                </Route>
                <Route exact path="/weather-app">
                    <Body/>
                </Route>
            </Switch>
        </Router>
    );
}
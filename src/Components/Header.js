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
        <Router basename="/weather-app">
            <div className={classes.root}>
                <AppBar position="static" color="primary">
                    <Toolbar>
                        <WbSunnyIcon edge="start" className={classes.menuButton} color="secondary" />
                        <Typography variant="h6" className={classes.title}>
                            Weather App
                        </Typography>
                        <Link to="/" className={classes.link}>
                            <Button className={classes.font}>HOME</Button>
                        </Link>
                        <Link to="/about" className={classes.link}>
                            <Button className={classes.font}>ABOUT</Button>
                        </Link>
                    </Toolbar>
                </AppBar>
            </div>
            <Switch>
                <Route exact path="/" component={Body} />
                <Route path="/about" component={About} />
            </Switch>
        </Router>
    );
}
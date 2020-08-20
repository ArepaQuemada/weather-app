import React from 'react';
import HomePage from './HomePage';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        margin: '8px'
    }
}));

export default function Body() {
    const classes = useStyles();
    return (
        <>
            <Box display="flex" alignItems="center" justifyContent="center" className={classes.root}>
                <HomePage />
            </Box>
        </>
    );
}
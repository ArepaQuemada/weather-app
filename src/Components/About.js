import React from 'react';
import { Container, Typography, Box, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '80vh'
    },
    title: {
        backgroundColor: theme.palette.secondary.main,
        borderRadius: '20px 20px 0 0',
        padding: '20px'
    },
    body: {
        background: theme.palette.neutral.light,
        padding: '20px'
    }
}))

export default function About() {
    const classes = useStyles();

    return (
        <Container className={classes.root} maxWidth="sm">
            <Box className={classes.title} width="80%">
                <Typography variant="h4">
                    WELCOME
                </Typography>
            </Box>
            <Box className={classes.body} width="80%" textAlign="start">
                <Typography variand="body1">
                    This is a project that I made to learn basic stuff about React, react-router, Context and Material-UI
                    (Basically I made this About and ListWeather page to practice some features from react-router).
                </Typography>
                <Typography variant="body1">
                    Anyway, since I don't really know what else to put in here I'll just thank you for taking the time to read through this
                </Typography>
                <Typography variant="h5">
                    Thanks, again, for stoping by :)
                </Typography>
            </Box>
        </Container>
    )
}
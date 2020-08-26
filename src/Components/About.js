import React from 'react';
import { Container, Typography } from '@material-ui/core';

const containerStyles = {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '80vh'
}

export default function About() {
    return (
        <Container maxWidth="sm" style={containerStyles}>

            <Typography variant="h4">
                WELCOME
            </Typography>
            <Typography>
                This is a project that I made to learn basic stuff about React, react-router and Material-UI
                (Basically I made this about page to practice some features from react-router).
                        </Typography>
            <Typography>
                Anyway, since I don't really know what else to put in here I'll just thank you for taking the time to read through this
                        </Typography>
            <Typography>
                Thanks, again, for stoping by :)
            </Typography>

        </Container>
    )
}
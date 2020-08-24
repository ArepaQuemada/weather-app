import React from 'react';
import { Card, CardContent, Typography, makeStyles } from '@material-ui/core';
import icons from '../icons/icons.json';
import dateFormat from 'dateformat'

const useStyles = makeStyles(theme => ({
    root: {
        minWidth: 135,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: '#302DC5',
        color: '#FFFFFF'
    },
    icon: {
        fontSize: 30
    }
}))

export default function WeatherCard ({ weather }) {

    const { dt_txt, main: { temp } = {}, weather: [{ description, icon }] = [] } = weather || {};
    const classes = useStyles();
    const iconClass = (icons[icon] || {}).icon;
    const day = dateFormat(dt_txt, "dddd");

    return (
        <Card color="secondary">
            <CardContent className={classes.root}>
                <Typography>
                    {day}
                </Typography>
                <Typography color="secondary">
                    <i className={`wi ${iconClass} ${classes.icon}`}></i>
                </Typography>
                <Typography variant="h5">
                    {temp}° 
                </Typography>
                <Typography>
                    {description}
                </Typography>
            </CardContent>
        </Card>
    );
}
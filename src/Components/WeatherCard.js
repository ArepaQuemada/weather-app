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
        textAlign: 'center'
    },
    icon: {
        fontSize: 25
    }
}))

export default function WeatherCard ({ weather }) {

    const { dt_txt, main: { temp } = {}, weather: [{ description, icon }] = [] } = weather || {};
    const classes = useStyles();
    const iconClass = (icons[icon] || {}).icon;
    const day = dateFormat(dt_txt, "dddd");

    return (
        <Card>
            <CardContent className={classes.root}>
                <Typography>
                    {day}
                </Typography>
                <i className={`wi ${iconClass} ${classes.icon}`}></i>
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
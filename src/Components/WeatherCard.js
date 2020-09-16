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
        backgroundColor: theme.palette.primary.light,
        color: '#FFFFFF',
        transition: '.2s',
        '&:hover': {
            backgroundColor: theme.palette.primary.main,
        }
    },
    icon: {
        fontSize: 25
    },
    days: {
        fontWeight: 'bold'
    },
    description: {
        textTransform: 'capitalize'
    }
}))

export default function WeatherCard ({ weather }) {

    const { dt_txt, main: { temp } = {}, weather: [{ description, icon }] = [] } = weather || {};
    const classes = useStyles();
    const iconClass = (icons[icon] || {}).icon;
    const day = dateFormat(dt_txt, "dddd");

    return (
        <Card color="secondary" className={classes.root}>
            <CardContent>
                <Typography className={classes.days}>
                    {day}
                </Typography>
                <Typography color="inherit">
                    <i className={`wi ${iconClass} ${classes.icon}`}></i>
                </Typography>
                <Typography variant="h5" component="h4">
                    {temp}° 
                </Typography>
                <Typography className={classes.description}>
                    {description}
                </Typography>
            </CardContent>
        </Card>
    );
}
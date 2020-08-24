import React from 'react';
import { Card, CardContent, Typography, makeStyles } from '@material-ui/core';
import icons from '../icons/icons.json';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: '#302DC5',
        color: '#FFFFFF'
    },
    icon: {
        fontSize: 45,
        marginTop: '25px',
        marginBottom: '25px'
    }
});

export default function BigCard ({ country, city, weather }) {
    
    const classes = useStyles();
    const { dt_txt,  main: { humidity, temp, temp_max, temp_min, feels_like }  = {}, weather: [{ description, main, icon }] = [] } = weather || {};
    const iconClass = (icons[icon] || {}).icon;
    
    return (
        <Card variant="outlined" className={classes.root}>
            <CardContent>
                <Typography variant="h4" component="h2">
                    {city} / {country}
                </Typography>
                <Typography variant="h5" component="h3">
                    {temp}° {main}
                </Typography>
                <Typography color="secondary">
                    <i className={`wi ${iconClass} ${classes.icon}`}></i>
                </Typography>
                <Typography variant="body1">
                    {temp_max}° - {temp_min}°
                </Typography>
                <Typography>
                    {description}
                </Typography>
                <Typography>
                    {humidity}
                </Typography>
                <Typography>
                    {feels_like}°
                </Typography>
                <Typography>
                    {dt_txt}
                </Typography>
            </CardContent>
        </Card> 
    );
}
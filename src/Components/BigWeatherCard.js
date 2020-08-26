import React from 'react';
import { Card, CardContent, Typography, makeStyles, Grid } from '@material-ui/core';
import icons from '../icons/icons.json';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: '#4a148c',
        color: '#FFFFFF'
    },
    content: {
        width: '75%'
    },
    icon: {
        fontSize: 45,
        marginTop: '25px',
        marginBottom: '25px'
    },
    container: {
        flexGrow: 1
    },
    description: {
        textTransform: 'capitalize'
    }
});

export default function BigWeatherCard ({ country, city, weather }) {
    
    const classes = useStyles();
    const { main: { humidity, temp, temp_max, temp_min, feels_like }  = {}, weather: [{ description, icon }] = [] } = weather || {};
    const iconClass = (icons[icon] || {}).icon;
    
    return (
        <Card variant="outlined" className={classes.root}>
            <CardContent className={classes.content}>
                <Typography variant="h4" component="h2">
                    {city} / {country}
                </Typography>
                <Typography variant="h5" component="h3">
                    {temp}°
                </Typography>
                <Typography color="inherit">
                    <i className={`wi ${iconClass} ${classes.icon}`}></i>
                </Typography>
                <Typography variant="body1">
                    {temp_max}° | {temp_min}°
                </Typography>
                <Typography className={classes.description}>
                    {description}
                </Typography>
                <Grid container className={classes.container}>
                    <Grid item xs={6}>
                        <Typography>
                            Humidity: {humidity}%
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography>
                            Feels Like: {feels_like}°
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card> 
    );
}
import React from 'react';
import { Card, CardContent, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        minWidth: 275
    }
})

export default function BigCard ({ country, city, weather }) {
    const classes = useStyles();
    const cardContentStyles = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }

    const { dt_txt,  main: { humidity, temp, temp_max, temp_min, feels_like }  = {}, weather: [{ description, main }] = [] } = weather || {};
    return (
        <Card variant="outlined" className={classes.root}>
            <CardContent>
                <Typography variant="h4" component="h2">
                    {city} / {country}
                </Typography>
                <Typography variant="h5" component="h3">
                    {temp}° {main}
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
    )
}
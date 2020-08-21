import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';

export default function WeatherCard ({ weather }) {
    
    const { main: { temp } = {}, weather: [{ description }] = [] } = weather || {};

    return (
        <Card>
            <CardContent>
                <Typography variant="h5">
                    {temp}° 
                </Typography>
                <Typography>
                    {description}
                </Typography>
            </CardContent>
        </Card>
    )
}
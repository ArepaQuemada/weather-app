import React from 'react';
import { Grid, makeStyles, useMediaQuery } from '@material-ui/core';
import BigWeatherCard from './BigWeatherCard';
import WeatherCard from './WeatherCard';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    size: 3
}));

export default function ViewCard({ data }) {

    const classes = useStyles();
    const isActive = useMediaQuery('(max-width: 665px)');
    isActive ? classes.size = 6 : classes.size = 3;
    const { city: { country = '', name = '' } = {} } = data || {}
    let weatherArray;

    if (data) {
        const parsedData = Array.from(new Set(data.list.map(item => item.dt_txt.substring(0, 10))))
            .map(date => {
                return data.list.find(item => item.dt_txt.substring(0, 10) === date);
            });
        if (parsedData.length > 4) {
            parsedData.pop();
        }
        weatherArray = parsedData;
    }

    return (
        <Grid container className={classes.root} spacing={1}>
            {weatherArray ? weatherArray.map((elem, index) => {
                return index === 0 ?
                    <Grid item xs={12} key={index}>
                        <BigWeatherCard
                            city={name}
                            country={country}
                            weather={elem}
                        />
                    </Grid>
                    :
                    <Grid item xs={classes.size} key={index}>
                        <WeatherCard
                            weather={elem}
                        />
                    </Grid>
            })
                :
                <div></div>
            }
        </Grid>
    );
}
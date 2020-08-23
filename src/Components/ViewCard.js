import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import BigWeatherCard from './BigWeatherCard';
import WeatherCard from './WeatherCard';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
}))

export default function ViewCard({ data }) {

    let weatherArray;
    const { city: { country = '', name = '' } = {} } = data || {}
    const classes = useStyles();

    if (data) {
        const parsedData = Array.from(new Set(data.list.map(item => item.dt_txt.substring(0, 10))))
            .map(date => {
                return data.list.find(item => item.dt_txt.substring(0, 10) === date);
            });

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
                    <Grid item xs={3} key={index}>
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
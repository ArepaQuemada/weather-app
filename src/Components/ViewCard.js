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
    let dateFormat = require('dateformat');

    if (data) {
         weatherArray = data.list.filter((item, index) => {
            if (index === 0) {
                return item;
            } else {
                const hour = dateFormat(item.dt_txt, 'h:MM:ss TT');
                return hour === '3:00:00 PM'
            }
        });
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
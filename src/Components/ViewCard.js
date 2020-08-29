import React, { useContext } from 'react';
import { Grid, makeStyles, useMediaQuery } from '@material-ui/core';
import BigWeatherCard from './BigWeatherCard';
import WeatherCard from './WeatherCard';
import { Link } from 'react-router-dom';
import { DataContext } from '../App';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    size: 3,
    link: {
        textDecoration: 'none'
    }
}));

export default function ViewCard() {

    const classes = useStyles();
    const isActive = useMediaQuery('(max-width: 665px)');
    isActive ? classes.size = 6 : classes.size = 3;
    const [ data ] = useContext(DataContext);
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
                        <Link className={classes.link} to={
                            {
                                pathname: `/${data.city.id}`,
                                state: {
                                    date: elem.dt_txt
                                }
                            }}>
                            <BigWeatherCard
                                city={name}
                                country={country}
                                weather={elem}
                            />
                        </Link>
                    </Grid>
                    :
                    <Grid item xs={classes.size} key={index}>
                        <Link className={classes.link} to={
                            {
                                pathname: `/${data.city.id}`,
                                state: {
                                    date: elem.dt_txt
                                }
                            }}>
                            <WeatherCard
                                weather={elem}
                            />
                        </Link>
                    </Grid>
            })
                :
                <div></div>
            }
        </Grid>
    );
}
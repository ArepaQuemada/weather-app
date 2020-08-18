import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid, CircularProgress } from '@material-ui/core';
import { API_KEY, HOST } from '../utils/api';
import Form from './Form';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

const spinnerStyles = {
    display: 'flex',
    justifyContent: 'center'
}

export default function HomePage() {
    const classes = useStyles();
    const [city, setCity] = useState('New York');
    const [data, setData] = useState();
    const [weatherArray, setWeatherArray] = useState();
    const [showSpinner, setShowSpinner] = useState(false);

    useEffect(() => {
        async function fetchData() {
            const URL = `${HOST}/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`;
            const data = await fetch(URL);
            setData(await data.json());
        }
        if (city) {
            setShowSpinner(true);
            const data = fetchData();
        }
    }, [city]);

    useEffect(() => {
        if (data) {
            const parsedData = Array.from(new Set(data.list.map(item => item.dt_txt.substring(0, 10))))
                .map(date => {
                    return data.list.find(item => item.dt_txt.substring(0, 10) === date);
                });
            const removeLast = (parsedData) => {
                parsedData.pop();
                return parsedData;
            }
            setWeatherArray(removeLast(parsedData));
            setShowSpinner(false);
        }
    }, [data]);

    useEffect(() => {
        if (weatherArray) {
            console.log(weatherArray);
        }
    }, [weatherArray])

    return (
        <div className={classes.root}>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <Form setCity={setCity} />
                </Grid>
                {showSpinner ?
                    <Grid item xs={12} style={spinnerStyles}>
                        <CircularProgress color="secondary" />
                    </Grid>
                    :
                    weatherArray ? weatherArray.map((elem, index) => {
                        return index === 0 ?
                            <Grid item xs={12} sm={6}>
                                <Paper className={classes.paper}>{elem.dt_txt}</Paper>
                            </Grid>
                            :
                            <Grid item xs={3} sm={6}>
                                <Paper className={classes.paper}>{elem.dt_txt}</Paper>
                            </Grid>
                    }) : ''
                }
            </Grid>
        </div>
    );
}
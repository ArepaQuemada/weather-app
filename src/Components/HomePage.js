import React, { useState, useEffect } from 'react';
import ViewCard from './ViewCard';
import ErrorModal from './ErrorModal';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, CircularProgress } from '@material-ui/core';
import { API_KEY, HOST } from '../utils/api';
import Form from './Form';
import axios from 'axios';

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
    
    const [city, setCity] = useState();
    const [data, setData] = useState();
    const [showSpinner, setShowSpinner] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        async function fetchData() {
            try {
                setShowSpinner(true);
                const URL = `${HOST}/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`;
                const fetchedData = await axios.get(URL);
                setData(fetchedData.data);
                setError(false);
            } catch (err) {
                setError(true);
            } finally {
                setShowSpinner(false);
            }
        }
        if (city) {
            fetchData();
        }
    }, [city]);

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
                    : error ?
                        <ErrorModal
                            error={error}
                        />
                        :
                        <ViewCard
                            data={data}
                            classes={classes} />
                }
            </Grid>
        </div>
    );
}
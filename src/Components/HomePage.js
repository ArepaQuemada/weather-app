import React, { useState, useEffect } from 'react';
import ViewCard from './ViewCard';
import ErrorModal from './ErrorModal';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, CircularProgress } from '@material-ui/core';
import Form from './Form';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        maxWidth: 741
    },
    spinner: {
        display: 'flex',
        justifyContent: 'center'
    }
}));

export default function HomePage() {

    const classes = useStyles();

    const [city, setCity] = useState();
    const [data, setData] = useState();
    const [showSpinner, setShowSpinner] = useState(false);
    const [error, setError] = useState(false);
    const [open, setOpen] = useState(false);
    const API_KEY = '211b593884e17ba50a9c07162cafe2b7';
    const HOST = 'http://api.openweathermap.org';
    
    const handleClose = () => {
        setOpen(false);
    }

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
                setOpen(true);
            } finally {
                setShowSpinner(false);
                setCity('');
            }
        }
        if (city) {
            fetchData();
        }
    }, [city]);

    return (
        <div className={classes.root}>
            <Grid container spacing={1} justify="center" alignItems="center">
                <Grid item xs={12}>
                    <Form setCity={setCity} />
                </Grid>
                {showSpinner ?
                    <Grid item xs={12} className={classes.spinner}>
                        <CircularProgress color="primary" />
                    </Grid>
                    : error ?
                        <ErrorModal
                            open={open}
                            onClose={handleClose}
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
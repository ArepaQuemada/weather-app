import React, { useState, useEffect, useContext } from 'react';
import ViewCard from './ViewCard';
import ErrorModal from './ErrorModal';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, CircularProgress } from '@material-ui/core';
import Form from './Form';
import { getWeather } from '../api/api';
import { DataContext } from '../App';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        maxWidth: 741,
        textDecoration: 'none'
    },
    spinner: {
        display: 'flex',
        justifyContent: 'center'
    }
}));

export default function HomePage() {

    const classes = useStyles();

    const [ data, setData ] = useContext(DataContext);
    const [ city, setCity ] = useState();
    const [ showSpinner, setShowSpinner ] = useState(false);
    const [ error, setError ] = useState(false);
    const [ open, setOpen ] = useState(false);

    const handleClose = () => {
        setOpen(false);
    }

    useEffect(() => {
        if (city) {
            getWeather(city, setShowSpinner, setError, setData, setOpen);
        }
    }, [ city, setData ]);

    useEffect(() => {
        if (error) {
            setData(undefined);
        }
    }, [error])

    return (
        <div className={classes.root}>
            <Grid container spacing={1} justify="center" alignItems="center">
                <Grid item xs={12}>
                    <Form setCity={setCity} />
                </Grid>
                {showSpinner ?
                    <Grid item xs={12} className={classes.spinner}>
                        <CircularProgress color="primary" />
                    </Grid> : <div></div> 
                }             
                {error ?
                    <ErrorModal
                        open={open}
                        onClose={handleClose}
                    /> : <div></div>
                } 
                {data && !showSpinner ? 
                   <ViewCard
                    data={data}
                    classes={classes} /> : <div></div>
                }
            </Grid>
        </div>
    );
}
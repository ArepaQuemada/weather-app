import React from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Typography, makeStyles } from '@material-ui/core';
import dateFormat from 'dateformat'
import icons from '../icons/icons.json';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        background: theme.palette.neutral.light,
        transition: '.2s',
        '&:hover': {
            backgroundColor: theme.palette.neutral.main
        }
    },
    heading: {
        flexBasis: '13.33%',
        flexShrink: 0
    },
    secondaryHeading: {
        fontWeight: 'bold'
    },
    icon: {
        fontSize: 25
    },
    summary: {
        color: '#000000'
    }
}));

export default function ListWeather({ weather }) {

    const classes = useStyles();
    const { dt_txt, main: { temp, humidity } = {}, weather: [{ icon, main }] = [] } = weather || {};
    const iconClass = (icons[icon] || {}).icon;
    return (
        <>
            <Accordion className={classes.root}>
                <AccordionSummary className={classes.summary}>
                    <Typography className={classes.heading}>{dateFormat(dt_txt, 'hh TT')}</Typography>
                    <Typography className={`${classes.heading} ${classes.secondaryHeading}`}>{temp}°</Typography>
                    <Typography className={classes.heading} color="inherit">
                        <i className={`wi ${iconClass} ${classes.icon}`}></i>
                    </Typography>
                    <Typography className={classes.heading}>
                        {main}
                    </Typography>
                    <Typography>
                        <i className={`wi wi-humidity`}></i>
                        {humidity}%
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>Details</Typography>
                </AccordionDetails>
            </Accordion>
        </>
    );
}
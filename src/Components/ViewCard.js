import React from 'react';
import { Paper, Grid } from '@material-ui/core';

export default function ViewCard({ data , classes }) {
    let weatherArray;
    if (data) {
        const parsedData = Array.from(new Set(data.list.map(item => item.dt_txt.substring(0, 10))))
            .map(date => {
                return data.list.find(item => item.dt_txt.substring(0, 10) === date);
            });
        const removeLast = (parsedData) => {
            parsedData.pop();
            return parsedData;
        }
        weatherArray = removeLast(parsedData);
    }
    
    return (
        weatherArray ? weatherArray.map((elem, index) => {
            return index === 0 ?
                <Grid item xs={12}>
                    <Paper className={classes.paper}>{elem.dt_txt}</Paper>
                </Grid>
                :
                <Grid item xs={3}>
                    <Paper className={classes.paper}>{elem.dt_txt}</Paper>
                </Grid>
        })
            :
            <div></div>
    );
}
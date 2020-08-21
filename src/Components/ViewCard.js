import React from 'react';
import { Grid } from '@material-ui/core';
import BigWeatherCard from './BigWeatherCard';
import WeatherCard from './WeatherCard';

export default function ViewCard({ data , classes }) {
    let weatherArray;
    const { city: { country = '', name = ''} = {} } = data || {}
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
                    <BigWeatherCard
                        city={name}
                        country={country}
                        weather={elem}
                    />
                </Grid>
                :
                <Grid item xs={3}>
                    <WeatherCard
                        weather={elem}
                    />
                </Grid>
        })
            :
            <div></div>
    );
}
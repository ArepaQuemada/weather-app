import React from 'react';
import { useLocation } from 'react-router-dom';
import dateFormat from 'dateformat';
import ListWeather from './ListWeather';

export default function DayPage() {

    const location = useLocation();
    const { data, date } = location.state;
    const day = dateFormat(date, 'dddd');

    if (data) {
        const weatherArray = data.list.filter(elem => {
            const dayOfWeek = dateFormat(elem.dt_txt, 'dddd');
            return dayOfWeek === day;
        });

        return (
            <>
                {weatherArray.map((elem, index) => {
                    return (
                        <ListWeather key={index}
                            weather={elem}
                        />          
                    )
                })}
            </>
        )
    }

}
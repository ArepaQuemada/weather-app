import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import dateFormat from 'dateformat';
import ListWeather from './ListWeather';
import { DataContext } from '../App';
import { Route, Redirect } from 'react-router-dom';

export default function DayPage() {

    const [data] = useContext(DataContext);
    const location = useLocation();
    const { date } = location.state;
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
    return (
        <Route>
            <Redirect to={{
                pathName: '/'
            }}></Redirect>
        </Route>
    )
}
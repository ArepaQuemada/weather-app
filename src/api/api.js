import axios from 'axios';

const API_KEY = '211b593884e17ba50a9c07162cafe2b7';
const HOST = 'https://api.openweathermap.org';

export async function getWeather(city, setShowSpinner, setError, setData, setOpen, closeSpinner) {
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
    }
}
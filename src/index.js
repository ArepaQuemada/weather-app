import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#4a148c',
            light: 'rgb(70, 20, 140, 0.6)',
        },
        secondary: {
            main: '#ef534e'
        },
        neutral: {
            main: 'rgb(255, 255, 255, 0.8)',
            light: 'rgb(255, 255, 255, 0.5)'
        },
        font: {
            main: "#FFFFFF"
        }
    },
});

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
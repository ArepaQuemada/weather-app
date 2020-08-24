import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#302DC5'
        },
        secondary: {
            main: '#09002C'
        },
        default: {
            main: '#E133D8'
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
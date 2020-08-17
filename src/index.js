import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#D1B1CB'
        },
        secondary: {
            main: '#EAFDF8'
        },
        default: {
            main: '#7C616C'
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
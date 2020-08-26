import React, { useRef} from 'react';
import { FormControl, InputLabel, Input, InputAdornment, FormHelperText, Button } from '@material-ui/core';
import RoomIcon from '@material-ui/icons/Room';

const formStyle = {
    width: '100%'
}

export default function Form({ setCity }) {

    const inputRef = useRef(null);

    const handleSubmit = (ev) => {
        ev.preventDefault();
        const [ { value } ] = inputRef.current.childNodes;
        setCity(value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <FormControl style={formStyle}>
                <InputLabel htmlFor="my-input">City name</InputLabel>
                <Input
                    id="my-input"
                    aria-describedby="my-helper-text"
                    color="secondary"
                    ref={inputRef}
                    endAdornment={
                        <InputAdornment position="start">
                            <RoomIcon />
                        </InputAdornment>
                    } />
                <FormHelperText id="my-helper-text">Ej: New York</FormHelperText>
                <Button variant="contained" color="primary" type="submit">Search</Button>
            </FormControl>
        </form>
    );
}
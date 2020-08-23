import React from 'react';
import { DialogTitle, Dialog, DialogContent, DialogContentText, makeStyles } from '@material-ui/core';
import WarningIcon from '@material-ui/icons/Warning';

const useStyles = makeStyles(theme => ({
    header: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#D45659'
    }
}))

export default function ErrorModal({ open, onClose }) {

    const classes = useStyles();

    const handleClose = () => {
        onClose();
    }

    return (
        <Dialog onClose={handleClose} open={open}>
            <DialogTitle className={classes.header}>
                <WarningIcon fontSize="large" />
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    An error has occured. We were unable to find the city.
                </DialogContentText>
                <DialogContentText>
                    Pleaste try another name.
                </DialogContentText>
            </DialogContent>
        </Dialog>
    )
}
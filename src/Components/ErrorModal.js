import React from 'react';
import { DialogTitle, Dialog, DialogContent, DialogContentText } from '@material-ui/core';
import WarningIcon from '@material-ui/icons/Warning';

export default function ErrorModal({ open, onClose }) {

    const handleClose = () => {
        onClose();
    }

    const headerStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#D45659'
    }

    return (
        <Dialog onClose={handleClose} open={open}>
            <DialogTitle style={headerStyle}>
                <WarningIcon fontSize="large"/>
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    <p>An error has occured. We were unable to find the city.</p>
                    <p>Pleaste try another name.</p>
                </DialogContentText>
            </DialogContent>
        </Dialog>
    )
}
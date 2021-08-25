import React, { useState } from "react"
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';

export default function (props) {
    const [openEdit, setOpenEdit] = React.useState(false);
    const [ch, setCh]= useState(props.ch)


    const handleClickOpenEdit = () => {
        setOpenEdit(true);
    };

    const handleCloseEdit = () => {
        setOpenEdit(false);
    };


    const handleEdit = () => {
        fetch(`http://localhost:4000/matiere/${props.id}`, {
            method: 'PUT',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify({ chargeHoraire: ch }),
            withCredentials: true,
        })
            .then(() => {
                window.location.reload()

            })
    }
    return (
        <div>
            <Tooltip title="Modifier" onClick={handleClickOpenEdit}>
                <IconButton aria-label="edit">
                    <EditIcon  />
                </IconButton>
            </Tooltip>
            <Dialog open={openEdit} onClose={handleCloseEdit} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Modifier</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Modifier la charge horaire de la matière {props.libele} pour le niveau {props.niveau}.
                        <br/>
                        Taper la nouvelle charge horaire.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Charge horaire"
                        fullWidth
                        onChange={(e) => setCh(e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseEdit} color="primary">
                        Annuler
                    </Button>
                    <Button onClick={handleEdit} color="primary">
                        Enregistrer
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
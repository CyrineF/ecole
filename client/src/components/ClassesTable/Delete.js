import React, { useState } from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


export default function Delete(props) {
    const [openDelete, setOpenDelete] = useState(false);
  
    const handleClickOpenDelete = () => {
      setOpenDelete(true);
    };
  
    const handleCloseDelete = () => {
      setOpenDelete(false);

    };

    const handleDelete = () => {
        fetch(`http://localhost:4000/classes/${props.id}`, {
          method: 'DELETE'
        }).then(() => {
          window.location.reload()
        })
      }
    return (
        <div>
            <Tooltip title="Supprimer" onClick={handleClickOpenDelete}>
                <IconButton aria-label="delete" >
                    <DeleteIcon />
                </IconButton>
            </Tooltip>
            <Dialog
                open={openDelete}
                onClose={handleCloseDelete}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">Voulez vous vraiment supprimer la classe {props.nom} ?</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        En cliquant Oui cette classe sera supprimé
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDelete} color="primary">
                        Non
                    </Button>
                    <Button onClick={handleDelete} color="primary" autoFocus>
                        Oui
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
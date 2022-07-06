import { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const BaseModal = () => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    // <div id="backdrop">
    //   <div
    //     role="alertdialog"
    //     aria-modal="true"
    //     aria-labelledby="dialog_label"
    //     aria-describedby="dialog_desc"
    //   >
    //     <h2 id="dialog_label">Confirmation</h2>
    //     <div id="dialog_desc">
    //       <p>Are you sure you want to delete this file?</p>
    //     </div>
    //     <button type="button">No. Close this popup.</button>
    //     <button type="button">Yes. Delete the file.</button>
    //   </div>
    // </div>

    <>
      <Button variant="outlined" onClick={handleClickOpen} sx={{ mt: 2 }}>
        Open alert dialog
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Confirmation"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this file?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="outlined">
            No. Close this popup
          </Button>
          <Button
            onClick={handleClose}
            autoFocus
            variant="contained"
            color="primary"
          >
            Yes. Delete the file
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default BaseModal;

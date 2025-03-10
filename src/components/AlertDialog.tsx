import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { InterfaceAlertDialog } from "@/app/types";

export default function AlertDialog({
  title = "",
  content = "",
  open = false,
  handleLogic = () => {},
  handleClose = () => {},
  children,
}: InterfaceAlertDialog) {
  return (
    <React.Fragment>
      {children}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {content}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleLogic}>OK</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

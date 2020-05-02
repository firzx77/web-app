import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Avatar,
  Button
} from "@material-ui/core/";
import { DeleteForeverOutlined } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";
import { useDispatch, useSelector } from "react-redux";
import { setDeleteConfirmationOpen } from "../../modules/Modals/actions";

const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiAvatar-root": {
      color: theme.palette.error.main,
      backgroundColor: theme.palette.error.light
    }
  }
}));

const DeleteConfirmationModal = () => {
  const dispatch = useDispatch();
  const modalState = useSelector(state => state.modals.deleteConfirmationOpen);
  const classes = useStyles();
  return (
    <Dialog
      open={modalState}
      onClose={() => dispatch(setDeleteConfirmationOpen(false))}
      aria-labelledby="form-dialog-title"
      maxWidth="sm"
      fullWidth={true}
    >
      <DialogTitle
        id="form-dialog-title"
        disableTypography
        classes={{
          root: classes.root
        }}
      >
        <Avatar classes={{ colorDefault: classes.root }}>
          <DeleteForeverOutlined />
        </Avatar>
        <div>Delete Item</div>
      </DialogTitle>

      <DialogContent style={{ textAlign: "center" }}>
        Are you sure you want to permanently remove this item?
      </DialogContent>

      <DialogActions>
        <Button size="large" onClick={() => dispatch(setDeleteConfirmationOpen(false))}>
          No, please keep
        </Button>
        <Button type="submit" variant="contained" color="secondary" size="large">
          Yes, delete this item
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteConfirmationModal;

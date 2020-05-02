import React from "react";
import { Snackbar, Slide, Button } from "@material-ui/core";
import { DeleteOutline } from "@material-ui/icons";

function SlideTransition(props) {
  return <Slide {...props} direction="up" />;
}

const TableActionsBar = ({ open, selectedItems }) => {
  return (
    <Snackbar
      open={open}
      TransitionComponent={SlideTransition}
      message={`${selectedItems} item${selectedItems > 1 ? "s" : ""} selected`}
      anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      action={
        <React.Fragment>
          <Button color="inherit" size="small" startIcon={<DeleteOutline />}>
            Delete
          </Button>
        </React.Fragment>
      }
    />
  );
};

export default TableActionsBar;

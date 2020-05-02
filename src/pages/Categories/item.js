import React from "react";

import {
  TableCell,
  TableRow,
  Typography,
  Chip,
  Checkbox,
  IconButton
} from "@material-ui/core";
import { DeleteOutline, EditOutlined } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";
import clsx from "clsx";
import { navigate } from "@reach/router";

// Actions
import { useDispatch, useSelector } from "react-redux";
import { setSelectedItems } from "../../modules/Table/actions";
import { setDeleteConfirmationOpen } from "../../modules/Modals/actions";

const useStyles = makeStyles(theme => ({
  cell: {
    overflow: "hidden"
  },
  cellNormal: {
    whiteSpace: "normal"
  },
  ellipsis: {
    maxWidth: "100%",
    overflow: "hidden",
    textOverflow: "ellipsis"
  },
  statusChip: {
    backgroundColor: theme.palette.success.light,
    color: theme.palette.success.main
  },
  deactivated: {
    backgroundColor: theme.palette.warning.light,
    color: theme.palette.warning.main
  },
  popover: {
    pointerEvents: "none"
  },
  paper: {
    padding: theme.spacing(1)
  }
}));

const Item = row => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const selectedItems = useSelector(state => state.table.selectedItems);
  const isSelected = id => selectedItems.indexOf(id) !== -1;
  const isItemSelected = isSelected(row.id);

  const handleClick = (e, id) => {
    dispatch(setSelectedItems(id));
  };

  return (
    <TableRow
      hover
      selected={isItemSelected}
      onClick={() =>
        navigate(
          `${
            process.env.REACT_APP_BASE_PATH ? process.env.REACT_APP_BASE_PATH : ""
          }/categories/${row.id}`
        )
      }
    >
      <TableCell padding="checkbox">
        <Checkbox
          checked={isItemSelected}
          color="primary"
          onClick={e => {
            e.stopPropagation();
            handleClick(e, row.id);
          }}
        />
      </TableCell>
      <TableCell scope="row" className={classes.cell}>
        <div>
          <Typography variant="subtitle1" className={classes.ellipsis}>
            <b>{row.name}</b>
          </Typography>
          <Typography
            variant="subtitle2"
            color="textSecondary"
            className={classes.ellipsis}
          >
            {row.description}
          </Typography>
        </div>
      </TableCell>
      <TableCell className={clsx(classes.cell, classes.cellNormal)}>
        {row.created_by}
      </TableCell>
      <TableCell className={classes.cell}>
        <Chip
          size="small"
          label={row.status}
          className={clsx(classes.statusChip, {
            [classes.deactivated]: row.status === "Deactivated"
          })}
        />
      </TableCell>
      <TableCell className={classes.cell}>
        <IconButton size="small" onClick={e => e.stopPropagation()}>
          <EditOutlined fontSize="small" />
        </IconButton>
        <IconButton
          size="small"
          onClick={e => {
            e.stopPropagation();
            dispatch(setDeleteConfirmationOpen(true));
          }}
        >
          <DeleteOutline fontSize="small" />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

export default Item;

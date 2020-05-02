import React from "react";
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Link, useMatch } from "@reach/router";

const useStyles = makeStyles(theme => ({
  link: {
    textDecoration: "none",
    color: "inherit"
  },
  listItem: {
    borderRadius: theme.spacing(1),
    marginBottom: theme.spacing(1),
    width: theme.spacing(30)
  }
}));

const InnerVerticalMenuItem = ({ title, subTitle, icon, to }) => {
  const classes = useStyles();
  const match = useMatch(`${to}/*`);
  return (
    <Link to={to} className={classes.link}>
      <ListItem
        button
        disableRipple
        className={classes.listItem}
        selected={match ? true : false}
      >
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={title} secondary={subTitle} />
      </ListItem>
    </Link>
  );
};

export default InnerVerticalMenuItem;

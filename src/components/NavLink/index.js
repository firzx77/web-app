import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "@reach/router";

const useStyles = makeStyles(theme => ({
  btnTopFilter: {
    borderRadius: theme.spacing(1),
    marginRight: theme.spacing(1),
    padding: theme.spacing(1.5),
    textDecoration: "none",
    color: theme.palette.grey[800],
    "&:hover": {
      backgroundColor: theme.palette.grey[200],
      color: theme.palette.primary.main
    },
    transition: theme.transitions.create(["background", "color"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  btnTopFilterActive: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.main,
    fontWeight: "bold",
    cursor: "default",
    "&:hover": {
      backgroundColor: theme.palette.primary.light
    }
  }
}));

const NavLink = ({ to, children }) => {
  const classes = useStyles();

  const isActive = ({ isCurrent }) => {
    return {
      className: clsx(classes.btnTopFilter, {
        [classes.btnTopFilterActive]: isCurrent
      })
    };
  };

  return (
    <Link to={to} getProps={isActive}>
      {children}
    </Link>
  );
};

export default NavLink;

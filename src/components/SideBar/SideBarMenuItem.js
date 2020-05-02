import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Link, useMatch } from "@reach/router";
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { setTitle } from "../../modules/Layout/actions";
import { useDispatch, useSelector } from "react-redux";

const useStyles = makeStyles(theme => ({
  navList: {
    position: "relative",
    paddingTop: theme.spacing(1.5),
    paddingBottom: theme.spacing(1.5),
    paddingLeft: theme.spacing(3),
    display: "flex",
    color: "#ffffff",
    transition: theme.transitions.create("color", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    "&:after": {
      top: theme.spacing(0.5),
      left: theme.spacing(1.5),
      content: "''",
      position: "absolute",
      width: `calc(100% - ${theme.spacing(3)}px)`,
      height: `calc(100% - ${theme.spacing(1)}px)`,
      right: "0",
      zIndex: "-1",
      transform: "scale(.98)",
      opacity: "0",
      backgroundColor: "#183e52",
      borderRadius: theme.spacing(1),
      transition: theme.transitions.create(["transform", "opacity"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    "&:hover": {
      "&:after": {
        transform: "scale(1)",
        opacity: "1"
      }
    },
    "&.Mui-selected, &:hover.Mui-selected": {
      backgroundColor: "transparent",
      color: "#ffffff",
      "&:after": {
        transform: "scale(1)",
        opacity: "1",
        backgroundColor: theme.palette.primary.main
      },
      "& .MuiListItemIcon-root": {
        color: "#ffffff"
      }
    }
  },
  link: {
    textDecoration: "none",
    color: "inherit"
  },
  icon: {
    color: "#ffffff"
  }
}));

const SideBarMenuItem = ({ title, to, icon }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const dataTitle = useSelector(state => state.layout.title);
  const match = useMatch(`${to}/*`);

  React.useLayoutEffect(() => {
    if (match && dataTitle === null) {
      dispatch(setTitle(title));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [match, dataTitle]);

  return (
    <Link
      to={to}
      className={classes.link}
      onClick={() => {
        if (!match) {
          dispatch(setTitle(title));
        }
      }}
    >
      <ListItem
        button
        className={classes.navList}
        selected={match ? true : false}
        disableRipple
      >
        <ListItemIcon className={classes.icon}>{icon}</ListItemIcon>
        <ListItemText>{title} </ListItemText>
      </ListItem>
    </Link>
  );
};

export default SideBarMenuItem;

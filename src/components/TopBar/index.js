import {
  Avatar,
  ClickAwayListener,
  Divider,
  Grid,
  Grow,
  IconButton,
  MenuItem,
  MenuList,
  Paper,
  Typography,
  Badge,
  Button,
  AppBar
} from "@material-ui/core";
import { NotificationsNoneOutlined } from "@material-ui/icons";
import { makeStyles, withStyles } from "@material-ui/styles";
import { navigate } from "@reach/router";
import React from "react";
import { useSelector } from "react-redux";

const useStyles = makeStyles(theme => ({
  appBar: {
    backgroundColor: "transparent",
    boxShadow: "none",
    paddingLeft: theme.custom.sideBarWidth,
    color: "inherit"
  },
  topBar: {
    padding: theme.spacing(2, 3, 2, 3),
    //marginBottom: theme.spacing(4),
    position: "relative",
    borderBottom: `1px solid ${theme.palette.grey[300]}`,
    backgroundColor: "#ffffff"
  },
  appLogo: {
    margin: `0 auto`,
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(2),
    width: theme.spacing(5),
    height: theme.spacing(5),
    borderRadius: theme.spacing(3),
    backgroundColor: theme.palette.primary.light
  },
  topBarBtn: {
    borderRadius: theme.spacing(8),
    border: `1px solid ${theme.palette.grey[200]}`
  },
  notification: {
    border: `1px solid ${theme.palette.grey[200]}`
  },
  text: {
    textTransform: "none",
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(1)
  },
  avatar: {
    width: theme.spacing(3),
    height: theme.spacing(3)
  },
  divider: {
    margin: theme.spacing(0, 1),
    width: theme.spacing(0.5),
    height: theme.spacing(0.5),
    alignSelf: "auto",
    borderRadius: theme.spacing(1)
  },
  popper: {
    zIndex: theme.zIndex.appBar + 1
  }
}));

const TopBar = () => {
  const classes = useStyles();
  const title = useSelector(state => state.layout.title);
  //==============Dropdown
  const [open, setOpen] = React.useState(false);

  const handleToggle = () => {
    setOpen(prevProps => !prevProps);
  };

  const handleClose = e => {
    e.stopPropagation();
    setOpen(false);
  };
  //==============End of Dropdown

  // Badge
  const StyledBadge = withStyles(theme => ({
    badge: {
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px"
    }
  }))(Badge);

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <div className={classes.topBar}>
        <Grid container justify="space-between" alignItems="center">
          <Grid item>
            <Typography variant="h5">
              <b>{title}</b>
            </Typography>
          </Grid>
          <Grid item>
            <Grid container alignItems="center">
              <Grid item>
                <IconButton size="small" className={classes.notification}>
                  <StyledBadge badgeContent={4} color="secondary">
                    <NotificationsNoneOutlined />
                  </StyledBadge>
                </IconButton>
              </Grid>
              <Divider orientation="vertical" flexItem className={classes.divider} />
              <Grid item>
                <ClickAwayListener onClickAway={handleClose}>
                  <div style={{ position: "relative" }}>
                    <Button
                      aria-controls="simple-menu"
                      aria-haspopup="true"
                      className={classes.topBarBtn}
                      onClick={handleToggle}
                    >
                      <span className={classes.text}>Administrator</span>
                      <Avatar
                        src="https://material-ui.com/static/images/avatar/1.jpg"
                        className={classes.avatar}
                      ></Avatar>
                    </Button>
                    <Grow
                      in={open}
                      style={{
                        position: "absolute",
                        top: "100%",
                        right: 16,
                        zIndex: 1,
                        transformOrigin: "top right"
                      }}
                    >
                      <Paper>
                        <MenuList autoFocusItem={open} id="menu-list-grow">
                          <MenuItem onClick={handleClose}>Profile</MenuItem>
                          <MenuItem onClick={handleClose}>My account</MenuItem>
                          <MenuItem
                            onClick={e => {
                              handleClose(e);
                              navigate(
                                `${
                                  process.env.REACT_APP_BASE_PATH
                                    ? process.env.REACT_APP_BASE_PATH
                                    : ""
                                }/login`
                              );
                            }}
                          >
                            Logout
                          </MenuItem>
                        </MenuList>
                      </Paper>
                    </Grow>
                  </div>
                </ClickAwayListener>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </AppBar>
  );
};

export default TopBar;

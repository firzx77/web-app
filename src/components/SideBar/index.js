import React from "react";
import { Drawer, List } from "@material-ui/core";
import {
  PeopleOutlineOutlined,
  SettingsOutlined,
  CategoryOutlined,
  QuestionAnswerOutlined
} from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";
import SideBarMenuItem from "./SideBarMenuItem";

const useStyles = makeStyles(theme => ({
  drawer: {
    width: theme.custom.sideBarWidth,
    borderRight: 0,
    backgroundColor: theme.palette.primary.sideBar
  },
  appLogo: {
    margin: `0 auto`,
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(2),
    width: theme.spacing(5),
    height: theme.spacing(5),
    borderRadius: theme.spacing(3),
    backgroundColor: theme.palette.primary.main
  }
}));

const SideBarMenus = [
  {
    title: "Users",
    to: "users",
    icon: <PeopleOutlineOutlined />
  },
  {
    title: "Categories",
    to: "categories",
    icon: <CategoryOutlined />
  },
  {
    title: "Questions",
    to: "questions",
    icon: <QuestionAnswerOutlined />
  },
  {
    title: "Settings",
    to: "settings",
    icon: <SettingsOutlined />
  }
];

const SideBar = React.memo(() => {
  const classes = useStyles();

  return (
    <Drawer
      variant="permanent"
      className={classes.drawer}
      classes={{
        paper: classes.drawer
      }}
    >
      <List className={classes.appLogo}></List>
      <List component="nav">
        {SideBarMenus.map((menu, key) => (
          <SideBarMenuItem key={key} to={menu.to} title={menu.title} icon={menu.icon} />
        ))}
      </List>
    </Drawer>
  );
});

export default SideBar;

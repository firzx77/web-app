import React from "react";

import { Business, AccountBox } from "@material-ui/icons";
import { List, Grid } from "@material-ui/core";
import InnerVerticalMenuItem from "../InnerVerticalMenuItem";
import FallbackLoader from "../FallbackLoader";
import ErrorBoundary from "../ErrorBoundary";
import ErrorFallback from "../ErrorFallback";

const menusList = [
  {
    title: "Company",
    subTitle: "Details about your company information",
    icon: <Business />,
    to: "company"
  },
  {
    title: "Profile",
    subTitle: "Details about your profile information",
    icon: <AccountBox />,
    to: "profile"
  }
];

const UsersPage = ({ children }) => {
  return (
    <Grid container spacing={2}>
      <Grid item>
        <List>
          {menusList.map((menu, key) => (
            <InnerVerticalMenuItem
              key={key}
              title={menu.title}
              subTitle={menu.subTitle}
              icon={menu.icon}
              to={menu.to}
            />
          ))}
        </List>
      </Grid>
      <Grid item style={{ width: 560, paddingTop: 16 }}>
        <ErrorBoundary fallback={<ErrorFallback />}>
          <React.Suspense fallback={<FallbackLoader />}>{children}</React.Suspense>
        </ErrorBoundary>
      </Grid>
    </Grid>
  );
};

export default UsersPage;

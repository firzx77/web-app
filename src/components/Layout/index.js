import React from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Redirect } from "@reach/router";

// Components
import FallbackLoader from "../FallbackLoader";
import ErrorBoundary from "../ErrorBoundary";
import ErrorFallback from "../ErrorFallback";
import SideBar from "../SideBar";
import TopBar from "../TopBar";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  contentWrapper: {
    flexGrow: 1,
    paddingTop: 96,
    paddingBottom: 32
  }
}));

const Layout = ({ children, location: { pathname } }) => {
  const classes = useStyles();

  if (pathname !== "/" && pathname.endsWith("/")) {
    return <Redirect from={pathname} to={pathname.slice(0, -1)} />;
  }

  return (
    <div className={classes.root}>
      <SideBar />
      <TopBar />
      <div className={classes.contentWrapper}>
        <Container maxWidth={false}>
          <ErrorBoundary fallback={<ErrorFallback />}>
            <React.Suspense fallback={<FallbackLoader />}>{children}</React.Suspense>
          </ErrorBoundary>
        </Container>
      </div>
    </div>
  );
};

export default Layout;

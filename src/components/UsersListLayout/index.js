import { Button, Grid, Box } from "@material-ui/core";
import React from "react";
import InviteUserModal from "../../containers/InviteUserModal";
import FallbackLoader from "../FallbackLoader";
import ErrorBoundary from "../ErrorBoundary";
import ErrorFallback from "../ErrorFallback";
import NavLink from "../NavLink";

const UsersListLayout = ({ children }) => {
  const [openModal, setOpenModal] = React.useState(false);

  return (
    <React.Fragment>
      <InviteUserModal open={openModal} setOpen={setOpenModal} />
      <Box mb={2}>
        <Grid container justify="space-between" alignItems="center">
          <Grid item>
            <NavLink to="./">Users List</NavLink>
            <NavLink to="invited">Invited List</NavLink>
          </Grid>
          <Grid item>
            <Button
              onClick={() => setOpenModal(true)}
              variant="contained"
              color="primary"
              size="large"
            >
              Invite User
            </Button>
          </Grid>
        </Grid>
      </Box>
      <ErrorBoundary fallback={<ErrorFallback />}>
        <React.Suspense fallback={<FallbackLoader />}>{children}</React.Suspense>
      </ErrorBoundary>
    </React.Fragment>
  );
};

export default UsersListLayout;

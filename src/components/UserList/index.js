import React from "react";
import { Grid, Paper, Avatar, Typography, Box, Chip } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import { makeStyles } from "@material-ui/styles";
import clsx from "clsx";

const useStyle = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(4, 4, 3, 4),
    borderRadius: theme.spacing(1),
    border: `1px solid ${theme.palette.grey[200]}`
  },
  avatar: {
    width: theme.spacing(6),
    height: theme.spacing(6),
    marginBottom: theme.spacing(1),
    backgroundColor: "#dcf1ff"
  },
  // invitedDateLabel: {
  //   fontSize: theme.typography.caption.fontSize,
  //   lineHeight: 0.4
  // },
  status: {
    backgroundColor: theme.palette.success.light,
    color: theme.palette.success.main
  },
  invited: {
    backgroundColor: theme.palette.warning.light,
    color: theme.palette.warning.main
  },
  skeleton: {
    borderRadius: "100px"
  }
}));

const UserList = ({ users, loading }) => {
  const classes = useStyle();

  const usersList = users.map(user => (
    <Grid item xs={3} key={user.id}>
      <Paper className={classes.paper} elevation={0}>
        <Grid container justify="space-between">
          <Grid item>
            <Avatar src={user.avatar} className={classes.avatar} />
          </Grid>
          <Grid item>
            <Chip
              size="small"
              label={user.status}
              className={clsx(classes.status, {
                [classes.invited]: user.status === "invited"
              })}
            />
          </Grid>
        </Grid>
        <Typography variant="subtitle1">
          <b>
            {user.first_name} {user.last_name}
          </b>
        </Typography>
        <Box mb={1}>
          <Typography variant="subtitle2" color="textSecondary">
            {user.email}
          </Typography>
          <Typography variant="subtitle2" color="textSecondary">
            {user.phone_number}
          </Typography>
        </Box>
        {/* <div className={classes.invitedDateLabel}>Invited Date</div>
        <Typography variant="overline" color="textSecondary">
          {user.invited_date}
        </Typography> */}
      </Paper>
    </Grid>
  ));

  const loadingSkeleton = [...Array(3)].map(i => (
    <Grid item xs={3} key={i}>
      <Paper className={classes.paper} elevation={0}>
        <Grid container justify="space-between">
          <Grid item>
            <Skeleton
              variant="circle"
              width={48}
              height={48}
              style={{ marginBottom: 12 }}
            />
          </Grid>
          <Grid item>
            <Skeleton
              className={classes.skeleton}
              variant="rect"
              width={60}
              height={24}
            />
          </Grid>
        </Grid>
        <Skeleton
          className={classes.skeleton}
          style={{ marginBottom: 12 }}
          variant="rect"
          width={128}
          height={18}
        />
        <Skeleton
          className={classes.skeleton}
          style={{ marginBottom: 8 }}
          variant="rect"
          width={224}
          height={12}
        />
        <Skeleton
          className={classes.skeleton}
          style={{ marginBottom: 14 }}
          variant="rect"
          width={160}
          height={12}
        />
      </Paper>
    </Grid>
  ));

  return (
    <Grid container spacing={2}>
      {loading ? loadingSkeleton : usersList}
    </Grid>
  );
};

export default UserList;

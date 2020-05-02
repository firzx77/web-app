import React from "react";
import {
  Grid,
  Button,
  Box,
  IconButton,
  InputBase,
  ClickAwayListener
} from "@material-ui/core";
import { FilterListOutlined, SearchOutlined } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";
import { useDispatch } from "react-redux";
import FilterContainer from "../../containers/FilterContainer";
import FilterIndicatorContainer from "../../containers/FilterIndicatorContainer";
import { toggleExpanded } from "../../modules/Filter/actions";

const useStyles = makeStyles(theme => ({
  wrapper: {
    display: "flex"
  },
  searchWrapper: {
    display: "flex",
    alignItems: "center",
    width: 400,
    backgroundColor: theme.palette.grey[100],
    borderRadius: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  input: {
    marginLeft: theme.spacing(3),
    flex: 1
  },
  iconButton: {
    padding: 10
  }
}));

const ListToolbar = ({
  modelName,
  addItemModalComponent,
  setModalOpen,
  filterFormComponent
}) => {
  const classes = useStyles();

  const dispatch = useDispatch();

  React.useEffect(() => {
    return () => {
      dispatch(setModalOpen(false));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleFilterClose = () => dispatch(toggleExpanded(false));
  return (
    <React.Fragment>
      {addItemModalComponent}
      <Box mb={2}>
        <Grid container justify="space-between" alignItems="center">
          <Grid item>
            <div className={classes.wrapper}>
              <div className={classes.searchWrapper}>
                <InputBase
                  className={classes.input}
                  placeholder={`Search ${modelName}`}
                  inputProps={{ "aria-label": `Search ${modelName}` }}
                />
                <IconButton className={classes.iconButton} aria-label="search">
                  <SearchOutlined />
                </IconButton>
              </div>
              <ClickAwayListener onClickAway={handleFilterClose}>
                <div style={{ position: "relative" }}>
                  <Button
                    startIcon={<FilterListOutlined />}
                    variant="outlined"
                    size="large"
                    onClick={() => dispatch(toggleExpanded())}
                  >
                    Filter
                  </Button>
                  <FilterContainer form={filterFormComponent} />
                </div>
              </ClickAwayListener>
            </div>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={() => dispatch(setModalOpen(true))}
            >
              + New {modelName}
            </Button>
          </Grid>
        </Grid>
        <FilterIndicatorContainer modelName={modelName} />
      </Box>
    </React.Fragment>
  );
};

export default ListToolbar;

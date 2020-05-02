import React from "react";
import { Chip, Link, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useSelector, useDispatch } from "react-redux";
import { clearFilter } from "../../modules/Filter/actions";
import { useLocation } from "@reach/router";
import { addFilter } from "../../modules/Filter/actions";
import queryString from "query-string";
import pluralize from "pluralize";

const useStyles = makeStyles(theme => ({
  chipGroup: {
    "& > *": {
      marginRight: theme.spacing(1)
    },
    "& .MuiChip-root": {
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.primary.main
    }
  },
  label: {
    textTransform: "uppercase",
    fontSize: 9,
    fontWeight: "bold",
    color: theme.palette.primary.chipKeyLabel
  },
  foundText: {
    padding: theme.spacing(1.5, 1, 1.5, 3),
    textTransform: "lowercase"
  },
  filterIndicator: {
    display: "flex",
    alignItems: "center"
  }
}));

const FilterIndicatorContainer = ({ modelName }) => {
  const classes = useStyles();
  const filters = useSelector(state => state.filter.values);
  const dispatch = useDispatch();
  //const navigate = useNavigate();
  const location = useLocation();

  React.useEffect(() => {
    if (location.search) {
      console.log(queryString.parse(location.search));
      let objects = queryString.parse(location.search);
      let arrayOfObjects = Object.keys(objects).map(object => ({
        key_label: object,
        value: objects[object]
      }));
      dispatch(addFilter(arrayOfObjects));
    }

    return () => dispatch(clearFilter());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={classes.filterIndicator}>
      <div className={classes.foundText}>
        <Typography variant="caption">6 {pluralize(modelName, 6)} found</Typography>
      </div>
      <div className={classes.chipGroup}>
        {filters.map(
          (filter, key) =>
            filter.key_label &&
            filter.value && (
              <Chip
                key={key}
                size="small"
                label={
                  <span>
                    <span className={classes.label}>{filter.key_label}</span>{" "}
                    <b>{filter.value}</b>
                  </span>
                }
              />
            )
        )}
        {filters.length > 0 && (
          <Link
            href="#"
            onClick={e => {
              e.preventDefault();
              dispatch(clearFilter(location.pathname));
            }}
            variant="caption"
          >
            Clear Filter
          </Link>
        )}
      </div>
    </div>
  );
};

export default FilterIndicatorContainer;

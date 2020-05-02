import { Grow, Paper, Box } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";

const FilterContainer = ({ form }) => {
  const filterExpanded = useSelector(state => state.filter.expanded);
  return (
    <Grow
      in={filterExpanded}
      style={{
        position: "absolute",
        top: "100%",
        left: "0",
        width: 280,
        transformOrigin: "top left",
        zIndex: 1
      }}
    >
      <Paper>
        <Box p={3}>{form}</Box>
      </Paper>
    </Grow>
  );
};

export default FilterContainer;

import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

const FallbackLoader = () => (
  <div
    style={{
      position: "absolute",
      top: "50%",
      left: "50%"
    }}
  >
    <CircularProgress size={24} />
  </div>
);

export default FallbackLoader;

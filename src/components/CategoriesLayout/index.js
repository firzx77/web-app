import React from "react";
import FallbackLoader from "../FallbackLoader";
import ErrorBoundary from "../ErrorBoundary";
import ErrorFallback from "../ErrorFallback";

const CategoriesLayout = ({ children }) => {
  return (
    <React.Fragment>
      <ErrorBoundary fallback={<ErrorFallback />}>
        <React.Suspense fallback={<FallbackLoader />}>{children}</React.Suspense>
      </ErrorBoundary>
    </React.Fragment>
  );
};

export default CategoriesLayout;

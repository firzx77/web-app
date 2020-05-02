import { navigate } from "@reach/router";

export const TOGGLE_EXPANDED = "SET_EXPANDED";
export const ADD_FILTER = "ADD_FILTER";
export const CLEAR_FILTER = "CLEAR_FILTER";

export const toggleExpanded = payload => (dispatch, getState) => {
  dispatch({
    type: TOGGLE_EXPANDED,
    payload: payload
  });
};

export const addFilter = payload => (dispatch, getState) => {
  dispatch({
    type: ADD_FILTER,
    payload: payload
  });
};

export const clearFilter = navigateUrl => (dispatch, getState) => {
  if (typeof navigateUrl !== "undefined") {
    navigate(navigateUrl);
  }
  dispatch({
    type: CLEAR_FILTER
  });
};

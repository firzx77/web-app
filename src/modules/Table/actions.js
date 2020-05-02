export const SET_SELECTED_ITEMS = "SET_SELECTED";
export const CLEAR_SELECTED_ITEMS = "CLEAR_SELECTED_ITEMS";

export const setSelectedItems = item => (dispatch, getState) => {
  dispatch({
    type: SET_SELECTED_ITEMS,
    payload: item
  });
};

export const clearSelectedItems = () => (dispatch, getState) => {
  dispatch({
    type: CLEAR_SELECTED_ITEMS
  });
};

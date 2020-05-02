export const SET_TITLE = "SET_TITLE";
export const CLEAR_TITLE = "CLEAR_TITLE";

export const setTitle = title => (dispatch, getState) => {
  dispatch({
    type: SET_TITLE,
    payload: title
  });
};

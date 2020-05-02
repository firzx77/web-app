export const SET_ADD_CATEGORY_MODAL_OPEN = "SET_ADD_CATEGORY_MODAL_OPEN";
export const SET_ADD_QUESTION_MODAL_OPEN = "SET_ADD_QUESTION_MODAL_OPEN";
export const SET_DELETE_CONFIRMATION_OPEN = "SET_DELETE_CONFIRMATION_OPEN";

export const setAddCategoryModalOpen = state => (dispatch, getState) => {
  dispatch({
    type: SET_ADD_CATEGORY_MODAL_OPEN,
    payload: state
  });
};

export const setAddQuestionModalOpen = state => (dispatch, getState) => {
  dispatch({
    type: SET_ADD_QUESTION_MODAL_OPEN,
    payload: state
  });
};

export const setDeleteConfirmationOpen = state => (dispatch, getState) => {
  dispatch({
    type: SET_DELETE_CONFIRMATION_OPEN,
    payload: state
  });
};

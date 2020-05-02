import {
  SET_ADD_CATEGORY_MODAL_OPEN,
  SET_DELETE_CONFIRMATION_OPEN,
  SET_ADD_QUESTION_MODAL_OPEN
} from "./actions";

export default (
  state = {
    addQuestionModalOpen: false,
    addCategoryModalOpen: false,
    deleteConfirmationOpen: false
  },
  action
) => {
  switch (action.type) {
    case SET_ADD_CATEGORY_MODAL_OPEN:
      return {
        ...state,
        addCategoryModalOpen: action.payload
      };
    case SET_ADD_QUESTION_MODAL_OPEN:
      return {
        ...state,
        addQuestionModalOpen: action.payload
      };
    case SET_DELETE_CONFIRMATION_OPEN:
      return {
        ...state,
        deleteConfirmationOpen: action.payload
      };
    default:
      return state;
  }
};

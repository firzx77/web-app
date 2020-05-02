import { SET_TITLE, CLEAR_TITLE } from "./actions";

export default (
  state = {
    title: null
  },
  action
) => {
  switch (action.type) {
    case CLEAR_TITLE:
      return {
        ...state,
        title: ""
      };
    case SET_TITLE:
      return {
        ...state,
        title: action.payload
      };
    default:
      return state;
  }
};

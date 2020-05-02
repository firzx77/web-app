import { TOGGLE_EXPANDED, ADD_FILTER, CLEAR_FILTER } from "./actions";

export default (
  state = {
    expanded: false,
    values: []
  },
  action
) => {
  switch (action.type) {
    case TOGGLE_EXPANDED:
      if (typeof action.payload !== "undefined") {
        return {
          ...state,
          expanded: action.payload
        };
      } else {
        return {
          ...state,
          expanded: !state.expanded
        };
      }
    case ADD_FILTER:
      return {
        ...state,
        values: [...action.payload]
      };
    case CLEAR_FILTER:
      return {
        ...state,
        values: []
      };
    default:
      return state;
  }
};

import { SET_SELECTED_ITEMS, CLEAR_SELECTED_ITEMS } from "./actions";

export default (
  state = {
    selectedItems: []
  },
  action
) => {
  switch (action.type) {
    case SET_SELECTED_ITEMS:
      const selectedIndex = state.selectedItems.indexOf(action.payload);
      let newSelected = [];
      if (selectedIndex === -1) {
        // If not exist, add it
        return {
          selectedItems: newSelected.concat(state.selectedItems, action.payload)
        };
      } else if (selectedIndex === 0) {
        // if selected index is on first of selectedItems
        return {
          selectedItems: newSelected.concat(state.selectedItems.slice(1))
        };
      } else if (selectedIndex === state.selectedItems.length - 1) {
        // if selected index is on last of selectedItems
        return {
          selectedItems: newSelected.concat(state.selectedItems.slice(0, -1))
        };
      } else if (selectedIndex > 0) {
        // if selected index is on the middle of selectedItems
        return {
          selectedItems: newSelected.concat(
            state.selectedItems.slice(0, selectedIndex),
            state.selectedItems.slice(selectedIndex + 1)
          )
        };
      }
      break;
    case CLEAR_SELECTED_ITEMS:
      return {
        selectedItems: []
      };
    default:
      return state;
  }
};

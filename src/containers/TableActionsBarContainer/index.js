import React from "react";
import TableActionsBar from "../../components/TableActionsBar";
import { useSelector } from "react-redux";

const TableActionsBarContainer = () => {
  const items = useSelector(state => state.table.selectedItems);
  const modalState = useSelector(
    state =>
      state.modals.addQuestionModalOpen ||
      state.filter.expanded ||
      state.modals.addCategoryModalOpen
  );
  return (
    <TableActionsBar
      open={items.length > 0 && !modalState}
      selectedItems={items.length}
    />
  );
};

export default TableActionsBarContainer;

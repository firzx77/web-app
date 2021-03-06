import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Checkbox
} from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import { makeStyles } from "@material-ui/styles";
import { clearSelectedItems, setSelectedItems } from "../../modules/Table/actions";
import { useDispatch } from "react-redux";
import clsx from "clsx";
import TableActionsBarContainer from "../../containers/TableActionsBarContainer";
import ListToolbar from "../../components/ListToolbar";
import DeleteConfirmationModal from "../../containers/DeleteConfirmationModal";

import Item from "./item";

// ListToolbar stuff
import AddQuestionModal from "../../containers/AddQuestionModal";
import { setAddQuestionModalOpen } from "../../modules/Modals/actions";
import QuestionFilterForm from "./QuestionFilterForm";

function createData(id, name, description, category, created_by, status) {
  return { id, name, description, category, created_by, status };
}

const rows = [
  createData(
    "5df6ff2fd826e351ddf51bd6",
    "What are some goals you have already achieved?",
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem minima quasi veniam officiis voluptatibus officia quisquam nihil debitis quam nostrum nobis nesciunt architecto, rerum labore perferendis dolores tempore itaque rem!",
    "Category 1",
    "Westley Bointon",
    "Activated"
  ),
  createData(
    "5de89d5d954d0f542439d850",
    "How often do you look at your phone every day?",
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem minima quasi veniam officiis voluptatibus officia quisquam nihil debitis quam nostrum nobis nesciunt architecto, rerum labore perferendis dolores tempore itaque rem!",
    "Category 2",
    "Marcille Scardifeild",
    "Activated"
  ),
  createData(
    "5d9454356a9a412c0341570b",
    "If you could run one business, which would it be, and how would you change it?",
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem minima quasi veniam officiis voluptatibus officia quisquam nihil debitis quam nostrum nobis nesciunt architecto, rerum labore perferendis dolores tempore itaque rem!",
    "Category 3",
    "Westley Bointon",
    "Activated"
  ),
  createData(
    "5d9454966a9a412c0341570f",
    "What was the best thing before sliced bread?",
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem minima quasi veniam officiis voluptatibus officia quisquam nihil debitis quam nostrum nobis nesciunt architecto, rerum labore perferendis dolores tempore itaque rem!",
    "Category 1",
    "Marcille Scardifeild",
    "Activated"
  ),
  createData(
    "5d9454806a9a412c0341570e",
    "What makes you smile about us?",
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem minima quasi veniam officiis voluptatibus officia quisquam nihil debitis quam nostrum nobis nesciunt architecto, rerum labore perferendis dolores tempore itaque rem!",
    "Category 1",
    "Westley Bointon",
    "Activated"
  ),
  createData(
    "5d9454136a9a412c03415709",
    "What is something you learned in the last week?",
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem minima quasi veniam officiis voluptatibus officia quisquam nihil debitis quam nostrum nobis nesciunt architecto, rerum labore perferendis dolores tempore itaque rem!",
    "Category 1",
    "Marcille Scardifeild",
    "Deactivated"
  )
];

const useStyles = makeStyles(theme => ({
  customBorder: {
    border: `1px solid ${theme.palette.grey[200]}`,
    width: "100%",
    height: "calc(100% - 48px)",
    position: "absolute",
    top: 48,
    left: 0,
    borderRadius: theme.spacing(1),
    zIndex: -1
  },
  cell: {
    overflow: "hidden"
  },
  category: {
    width: "150px"
  },
  createdBy: {
    width: "150px"
  },
  status: {
    width: "150px"
  },
  action: {
    width: "100px",
    textAlign: "right"
  },
  pagination: {
    "& .MuiPagination-ul": {
      justifyContent: "flex-end"
    }
  }
}));

const QuestionsListPage = () => {
  const classes = useStyles();

  const dispatch = useDispatch();

  React.useEffect(() => {
    return () => dispatch(clearSelectedItems());
  }, [dispatch]);

  const handleSelectAllClick = event => {
    if (event.target.checked) {
      dispatch(clearSelectedItems()); // Clear first
      const newSelecteds = rows.map(n => n.id);
      dispatch(setSelectedItems(newSelecteds));
      return;
    }
    dispatch(clearSelectedItems());
  };

  return (
    <React.Fragment>
      <ListToolbar
        addItemModalComponent={<AddQuestionModal />}
        modelName="Question"
        setModalOpen={setAddQuestionModalOpen}
        filterFormComponent={<QuestionFilterForm />}
      />
      <DeleteConfirmationModal />
      <TableContainer>
        <div className={classes.customBorder}></div>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox onChange={handleSelectAllClick} color="primary" />
              </TableCell>
              <TableCell className={clsx(classes.cell)}>Title</TableCell>
              <TableCell className={clsx(classes.cell, classes.category)}>
                Category
              </TableCell>
              <TableCell className={clsx(classes.cell, classes.createdBy)}>
                Created By
              </TableCell>
              <TableCell className={clsx(classes.cell, classes.status)}>Status</TableCell>
              <TableCell className={clsx(classes.cell, classes.action)}>
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <Item key={row.id} {...row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination count={10} shape="rounded" className={classes.pagination} />
      <TableActionsBarContainer />
    </React.Fragment>
  );
};

export default QuestionsListPage;

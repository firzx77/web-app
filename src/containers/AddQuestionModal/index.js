import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
  Avatar,
  Switch,
  FormControlLabel,
  Typography,
  Box,
  Chip
} from "@material-ui/core/";
import { QuestionAnswerOutlined } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";
import { Formik } from "formik";
import { Autocomplete } from "@material-ui/lab";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { setAddQuestionModalOpen } from "../../modules/Modals/actions";

const categories = [
  {
    value: "Category 1",
    label: "Category 1"
  },
  {
    value: "Category 2",
    label: "Category 2"
  },
  {
    value: "Category 3",
    label: "Category 3"
  }
];

const useStyles = makeStyles(theme => ({
  activated: {
    backgroundColor: theme.palette.success.light,
    color: theme.palette.success.main
  },
  deactivated: {
    backgroundColor: theme.palette.warning.light,
    color: theme.palette.warning.main
  }
}));

const AddCategoryModal = () => {
  const dispatch = useDispatch();
  const modalState = useSelector(state => state.modals.addQuestionModalOpen);
  const classes = useStyles();
  return (
    <Dialog
      open={modalState}
      onClose={() => dispatch(setAddQuestionModalOpen(false))}
      aria-labelledby="form-dialog-title"
      maxWidth="sm"
      fullWidth={true}
    >
      <DialogTitle id="form-dialog-title" disableTypography>
        <Avatar>
          <QuestionAnswerOutlined />
        </Avatar>
        <div>+ New Question</div>
      </DialogTitle>

      <Formik
        initialValues={{
          title: "",
          content: "",
          category: {
            value: "",
            label: ""
          },
          status: false
        }}
        onSubmit={async values => {
          await new Promise(resolve => setTimeout(resolve, 500));
          alert("added!");
          dispatch(setAddQuestionModalOpen(false));
        }}
        validationSchema={Yup.object().shape({
          title: Yup.string().required("title is required"),
          content: Yup.string().required("content is required"),
          category: Yup.object().shape({
            value: Yup.string().required("category is required"),
            label: Yup.string().required("category is required")
          }),
          status: Yup.boolean()
        })}
      >
        {props => {
          const {
            values,
            touched,
            errors,
            //dirty,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
            setFieldValue,
            setFieldTouched
            //setValues,
            //handleReset
          } = props;
          return (
            <form onSubmit={handleSubmit}>
              <DialogContent>
                <div>
                  <TextField
                    fullWidth
                    required
                    id="title"
                    label="Title"
                    type="text"
                    value={values.title}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={errors.title && touched.title ? errors.title : " "}
                    error={errors.title && touched.title}
                  />
                </div>
                <div>
                  <TextField
                    fullWidth
                    required
                    id="content"
                    label="Content"
                    type="text"
                    multiline
                    rows="8"
                    value={values.content}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={errors.content && touched.content ? errors.content : " "}
                    error={errors.content && touched.content}
                  />
                </div>
                <div>
                  <Autocomplete
                    id="category"
                    options={categories}
                    getOptionLabel={option => option.value}
                    value={values.category}
                    onChange={(e, value) => setFieldValue("category", value)}
                    onBlur={() => setFieldTouched("category", true)}
                    disableClearable={true}
                    renderInput={params => (
                      <TextField
                        {...params}
                        required
                        label="Category"
                        helperText={
                          errors.category && touched.category
                            ? errors.category.value
                            : " "
                        }
                        error={errors.category && touched.category}
                      />
                    )}
                  />
                </div>
                <Box mt={2}>
                  <Typography color="textSecondary">Status</Typography>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={values.status}
                        onChange={handleChange}
                        color="primary"
                        name="status"
                      />
                    }
                    label={
                      values.status ? (
                        <Chip
                          size="small"
                          label="Activated"
                          className={classes.activated}
                        />
                      ) : (
                        <Chip
                          size="small"
                          label="Deactivated"
                          className={classes.deactivated}
                        />
                      )
                    }
                  />
                </Box>
              </DialogContent>
              <DialogActions>
                <Button
                  color="secondary"
                  size="large"
                  onClick={() => dispatch(setAddQuestionModalOpen(false))}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="large"
                  disabled={
                    !values.name ||
                    errors.name ||
                    !values.description ||
                    errors.description ||
                    isSubmitting
                  }
                >
                  Add
                </Button>
              </DialogActions>
            </form>
          );
        }}
      </Formik>
    </Dialog>
  );
};

export default AddCategoryModal;

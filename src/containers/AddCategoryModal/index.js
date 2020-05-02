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
import { CategoryOutlined } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";
import { Formik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { setAddCategoryModalOpen } from "../../modules/Modals/actions";

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
  const modalState = useSelector(state => state.modals.addCategoryModalOpen);
  const classes = useStyles();
  return (
    <Dialog
      open={modalState}
      onClose={() => dispatch(setAddCategoryModalOpen(false))}
      aria-labelledby="form-dialog-title"
      maxWidth="sm"
      fullWidth={true}
    >
      <DialogTitle id="form-dialog-title" disableTypography>
        <Avatar>
          <CategoryOutlined />
        </Avatar>
        <div>+ New Category</div>
      </DialogTitle>

      <Formik
        initialValues={{
          name: "",
          description: "",
          status: false
        }}
        onSubmit={async values => {
          await new Promise(resolve => setTimeout(resolve, 500));
          alert("added!");
          dispatch(setAddCategoryModalOpen(false));
        }}
        validationSchema={Yup.object().shape({
          name: Yup.string().required("category name is required"),
          description: Yup.string().required("description is required"),
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
            handleSubmit
            //setFieldValue,
            // setFieldTouched
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
                    id="name"
                    label="Category Name"
                    type="text"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={errors.name && touched.name ? errors.name : " "}
                    error={errors.name && touched.name}
                  />
                </div>
                <div>
                  <TextField
                    fullWidth
                    required
                    id="description"
                    label="Description"
                    type="text"
                    multiline
                    rows="8"
                    value={values.description}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.description && touched.description ? errors.description : " "
                    }
                    error={errors.description && touched.description}
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
                  onClick={() => dispatch(setAddCategoryModalOpen(false))}
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

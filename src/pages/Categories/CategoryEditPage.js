import React from "react";

import {
  TextField,
  Button,
  Switch,
  FormControlLabel,
  Typography,
  Box,
  Chip,
  Card,
  CardContent,
  CardActions,
  IconButton,
  Toolbar
} from "@material-ui/core/";
import { ArrowBack } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";
import { Formik } from "formik";
import { navigate } from "@reach/router";
import * as Yup from "yup";

const useStyles = makeStyles(theme => ({
  activated: {
    backgroundColor: theme.palette.success.light,
    color: theme.palette.success.main
  },
  deactivated: {
    backgroundColor: theme.palette.warning.light,
    color: theme.palette.warning.main
  },
  card: {
    width: theme.spacing(70)
  }
}));

const CategoryEditPage = ({ id }) => {
  const classes = useStyles();
  return (
    <div>
      <Box mb={1}>
        <Toolbar disableGutters={true} variant="dense">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            size="small"
            style={{ marginRight: 12 }}
            onClick={() =>
              navigate(
                `${
                  process.env.REACT_APP_BASE_PATH ? process.env.REACT_APP_BASE_PATH : ""
                }/categories`
              )
            }
          >
            <ArrowBack />
          </IconButton>
          <Typography variant="h6">
            <b>Frozen yoghurt</b>
          </Typography>
        </Toolbar>
      </Box>
      <Formik
        initialValues={{
          name: "Frozen yoghurt",
          description:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem minima quasi veniam officiis voluptatibus officia quisquam nihil debitis quam nostrum nobis nesciunt architecto, rerum labore perferendis dolores tempore itaque rem!",
          status: true
        }}
        onSubmit={async values => {
          await new Promise(resolve => setTimeout(resolve, 500));
          alert("added!");
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
              <Card variant="outlined" className={classes.card}>
                <CardContent>
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
                        errors.description && touched.description
                          ? errors.description
                          : " "
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
                </CardContent>
                <CardActions>
                  <Button color="secondary" size="large">
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
                    Save
                  </Button>
                </CardActions>
              </Card>
            </form>
          );
        }}
      </Formik>
    </div>
  );
};

export default CategoryEditPage;

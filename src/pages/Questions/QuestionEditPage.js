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
} from "@material-ui/core";
import { ArrowBack } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";
import { Formik } from "formik";
import { navigate } from "@reach/router";
import { Autocomplete } from "@material-ui/lab";
import * as Yup from "yup";

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
  },
  card: {
    width: theme.spacing(70)
  }
}));

const QuestionEditPage = ({ id }) => {
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
                }/questions`
              )
            }
          >
            <ArrowBack />
          </IconButton>
          <Typography variant="h6">
            <b>What are some goals you have already achieved?</b>
          </Typography>
        </Toolbar>
      </Box>
      <Formik
        initialValues={{
          title: "What are some goals you have already achieved?",
          content:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem minima quasi veniam officiis voluptatibus officia quisquam nihil debitis quam nostrum nobis nesciunt architecto, rerum labore perferendis dolores tempore itaque rem!",
          category: {
            value: "Category 1",
            label: "Category 1"
          },
          status: true
        }}
        onSubmit={async values => {
          await new Promise(resolve => setTimeout(resolve, 500));
          alert("added!");
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
              <Card variant="outlined" className={classes.card}>
                <CardContent>
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
                      helperText={
                        errors.content && touched.content ? errors.content : " "
                      }
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

export default QuestionEditPage;

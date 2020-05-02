import { TextField, Typography, Box, Button } from "@material-ui/core";
import React from "react";
import { Formik } from "formik";
import { Autocomplete, ToggleButton, ToggleButtonGroup } from "@material-ui/lab";
import { makeStyles } from "@material-ui/styles";
import { useDispatch } from "react-redux";
import { toggleExpanded, addFilter, clearFilter } from "../../modules/Filter/actions";
import { useNavigate, useLocation } from "@reach/router";
import queryString from "query-string";

const useStyles = makeStyles(theme => ({
  buttonGroup: {
    width: "100%",
    "& .MuiToggleButton-root": {
      flexBasis: "50%",
      fontWeight: "bold",
      border: 0,
      borderRadius: theme.spacing(1)
    },
    "& .MuiToggleButton-root.Mui-selected": {
      color: theme.palette.primary.main,
      backgroundColor: theme.palette.primary.light
    }
  },
  filterFormFooter: {
    display: "flex",
    justifyContent: "flex-end",
    marginBottom: -theme.spacing(1),
    marginRight: -theme.spacing(1),
    marginTop: theme.spacing(3),
    paddingTop: theme.spacing(2),
    borderTop: `1px solid ${theme.palette.grey[300]}`
  }
}));

const userNames = [
  {
    value: "Marcille Scardifeild",
    label: "Marcille Scardifeild"
  },
  {
    value: "Westley Bointon",
    label: "Westley Bointon"
  },
  {
    value: "Shirlee Wilcocks",
    label: "Shirlee Wilcocks"
  },
  {
    value: "Zaria Rowsell",
    label: "Zaria Rowsell"
  }
];

const CategoryFilterForm = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const initialValues = {
    created_by: {
      key_label: "created_by",
      value: "",
      label: ""
    },
    status: {
      key_label: "status",
      value: ""
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, { resetForm }) => {
        if (
          (values.created_by.key_label && values.created_by.value) ||
          (values.status.key_label && values.status.value)
        ) {
          dispatch(addFilter(Object.values(values)));
          let constructQueryParams = Object.assign(
            {},
            ...Object.keys(values).map(value => ({
              [value]: values[value].value ? values[value].value : null
            }))
          );
          navigate(
            `?${queryString.stringify(constructQueryParams, {
              skipNull: true
            })}`
          );
          resetForm();
        } else {
          dispatch(clearFilter(location.pathname));
        }
        dispatch(toggleExpanded(false));
      }}
      validationSchema={null}
    >
      {props => {
        const {
          values,
          //   touched,
          //   errors,
          //   dirty,
          //   isSubmitting,
          //   handleChange,
          //   handleBlur,
          handleSubmit,
          setFieldValue,
          setFieldTouched
          //setValues,
          //handleReset
        } = props;
        return (
          <form onSubmit={handleSubmit}>
            <Box mb={2}>
              <Autocomplete
                id="created_by"
                autoComplete={true}
                options={userNames}
                getOptionLabel={option => option.label}
                value={values.created_by}
                onChange={(e, value) => {
                  setFieldValue("created_by.value", value ? value.value : "");
                  setFieldValue("created_by.label", value ? value.label : "");
                }}
                onBlur={() => setFieldTouched("created_by", true)}
                disableClearable={true}
                renderInput={params => (
                  <TextField
                    {...params}
                    label="Created By"
                    fullWidth
                    InputLabelProps={{
                      shrink: true
                    }}
                  />
                )}
              />
            </Box>
            <Box mb={0.5}>
              <Typography variant="caption" color="textSecondary">
                Status
              </Typography>
            </Box>
            <ToggleButtonGroup
              size="small"
              value={values.status.value}
              exclusive
              onChange={(e, value) => {
                setFieldValue("status.value", value ? value : "");
              }}
              className={classes.buttonGroup}
            >
              <ToggleButton value="Activated" disableRipple>
                Activated
              </ToggleButton>
              <ToggleButton value="Deactivated" disableRipple>
                Deactivated
              </ToggleButton>
            </ToggleButtonGroup>
            <div className={classes.filterFormFooter}>
              <Button onClick={() => dispatch(toggleExpanded(false))}>Cancel</Button>
              <Button color="primary" type="submit">
                Apply Filter
              </Button>
            </div>
          </form>
        );
      }}
    </Formik>
  );
};

export default CategoryFilterForm;

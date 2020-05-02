import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import {
  Button,
  TextField,
  Typography,
  Card,
  CardContent,
  CardActions
} from "@material-ui/core";

const CompanySettingsPage = () => {
  return (
    <Formik
      initialValues={{
        company_name: "",
        description: "",
        website_url: ""
      }}
      onSubmit={async values => {
        await new Promise(resolve => setTimeout(resolve, 500));
        alert("added!");
      }}
      validationSchema={Yup.object().shape({
        company_name: Yup.string().required("Company name is required"),
        description: Yup.string().required("Description is required"),
        website_url: Yup.string()
          .url(
            "Please enter a valid URL. Examples: https://google.com, http://google.com"
          )
          .required("website url is required")
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
          //setFieldTouched
          //setValues,
          //handleReset
        } = props;
        return (
          <Card variant="outlined">
            <form onSubmit={handleSubmit}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  <b>Company</b>
                </Typography>
                <div>
                  <TextField
                    fullWidth
                    required
                    id="company_name"
                    label="Company Name"
                    type="text"
                    value={values.first_name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.company_name && touched.company_name
                        ? errors.company_name
                        : " "
                    }
                    error={errors.company_name && touched.company_name}
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
                <div>
                  <TextField
                    fullWidth
                    required
                    id="website_url"
                    label="Website URL"
                    type="text"
                    value={values.website_url}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.website_url && touched.website_url ? errors.website_url : " "
                    }
                    error={errors.website_url && touched.website_url}
                  />
                </div>
              </CardContent>
              <CardActions>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="large"
                  disabled={
                    !values.company_name ||
                    errors.company_name ||
                    !values.description ||
                    errors.description ||
                    !values.website_url ||
                    errors.website_url ||
                    isSubmitting
                  }
                >
                  Save Changes
                </Button>
              </CardActions>
            </form>
          </Card>
        );
      }}
    </Formik>
  );
};

export default CompanySettingsPage;

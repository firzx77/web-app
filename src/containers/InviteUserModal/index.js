import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
  Grid,
  Avatar
} from "@material-ui/core/";
import { PersonAddOutlined } from "@material-ui/icons";
import { Formik, getIn, Field } from "formik";
import * as Yup from "yup";
import { Rifm } from "rifm";
import { AsYouType } from "libphonenumber-js";

const parseDigits = string => (string.match(/\d+/g) || []).join("");

const formatPhone = string => {
  const digits = parseDigits(string).substr(0, 10);
  return new AsYouType("US").input(digits);
};

const InviteUserModal = ({ open, setOpen }) => {
  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="form-dialog-title"
      maxWidth="sm"
      fullWidth={true}
    >
      <DialogTitle id="form-dialog-title" disableTypography>
        <Avatar>
          <PersonAddOutlined />
        </Avatar>
        <div>Invite User</div>
      </DialogTitle>

      <Formik
        initialValues={{
          first_name: "",
          last_name: "",
          email: "",
          phone_number: {
            display_number: "",
            real_number: ""
          }
        }}
        onSubmit={async values => {
          await new Promise(resolve => setTimeout(resolve, 500));
          alert("added!");
          setOpen(false);
        }}
        validationSchema={Yup.object().shape({
          first_name: Yup.string().required("first name is required"),
          last_name: Yup.string().required("last name is required"),
          email: Yup.string()
            .email()
            .required("email is required"),
          phone_number: Yup.object().shape({
            display_number: Yup.string(),
            real_number: Yup.string().required("phone number is required")
          })
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
            //setFieldValue,
            setFieldTouched
            //setValues,
            //handleReset
          } = props;
          return (
            <form onSubmit={handleSubmit}>
              <DialogContent>
                <Grid container spacing={3}>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      required
                      id="first_name"
                      label="First Name"
                      type="text"
                      value={values.first_name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      helperText={
                        errors.first_name && touched.first_name ? errors.first_name : " "
                      }
                      error={errors.first_name && touched.first_name}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      required
                      id="last_name"
                      label="Last Name"
                      type="text"
                      value={values.last_name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      helperText={
                        errors.last_name && touched.last_name ? errors.last_name : " "
                      }
                      error={errors.last_name && touched.last_name}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      required
                      id="email"
                      label="Email"
                      type="text"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      helperText={errors.email && touched.email ? errors.email : " "}
                      error={errors.email && touched.email}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <Field
                      name="phone_number.real_number"
                      render={({ field, form }) => (
                        <Rifm
                          format={formatPhone}
                          onChange={val =>
                            form.setFieldValue("phone_number.real_number", val)
                          }
                          value={field.value}
                        >
                          {({ value, onChange }) => (
                            <TextField
                              fullWidth
                              required
                              id="phone_number.real_number"
                              label="Phone Number"
                              type="text"
                              value={value}
                              onChange={onChange}
                              onBlur={() =>
                                setFieldTouched("phone_number.real_number", true)
                              }
                              helperText={
                                getIn(errors, "phone_number.real_number") &&
                                getIn(touched, "phone_number.real_number")
                                  ? getIn(errors, "phone_number.real_number")
                                  : " "
                              }
                              error={
                                getIn(errors, "phone_number.real_number") &&
                                getIn(touched, "phone_number.real_number")
                              }
                            />
                          )}
                        </Rifm>
                      )}
                    />
                  </Grid>
                </Grid>
              </DialogContent>
              <DialogActions>
                <Button color="secondary" size="large" onClick={() => setOpen(false)}>
                  Cancel
                </Button>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="large"
                  disabled={
                    !values.first_name ||
                    errors.first_name ||
                    !values.last_name ||
                    errors.last_name ||
                    !values.email ||
                    errors.email ||
                    !values.phone_number ||
                    errors.phone_number ||
                    isSubmitting
                  }
                >
                  Invite User
                </Button>
              </DialogActions>
            </form>
          );
        }}
      </Formik>
    </Dialog>
  );
};

export default InviteUserModal;

import {
  Box,
  Button,
  Paper,
  TextField,
  Typography,
  Grid,
  FormControlLabel,
  Checkbox,
  Link
} from "@material-ui/core";
import { AccountCircleOutlined, LockOutlined } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import { Formik } from "formik";
import React from "react";
import { navigate } from "@reach/router";
import * as Yup from "yup";

const useStyles = makeStyles(theme => ({
  container: {
    width: "400px",
    margin: "0 auto",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap"
  },
  loginHeader: {
    position: "relative",
    "&::after": {
      bottom: 0,
      height: "2px",
      backgroundColor: theme.palette.primary.main,
      width: theme.spacing(6),
      content: "''",
      position: "absolute"
    }
  },
  paper: {
    width: "100%",
    padding: theme.spacing(5),
    border: "1px solid #e6edf2",
    borderRadius: 8
  },
  inputLabel: {
    left: theme.spacing(4)
  },
  input: {
    paddingLeft: theme.spacing(4),
    paddingBottom: theme.spacing(1)
  },
  iconWrapper: {
    position: "absolute",
    top: theme.spacing(2.5)
  },
  helperText: {
    textAlign: "right"
  },
  inputWrapper: {
    flexGrow: 2
  }
}));

const LoginPage = () => {
  const classes = useStyles();

  const CustomTextField = ({ icon, ...props }) => {
    return (
      <Box mb={0}>
        <Grid container spacing={1} alignItems="center" style={{ position: "relative" }}>
          <Grid item className={classes.iconWrapper}>
            {icon}
          </Grid>
          <Grid item className={classes.inputWrapper}>
            <TextField
              {...props}
              fullWidth
              InputLabelProps={{
                className: classes.inputLabel
              }}
              InputProps={{
                className: classes.input
              }}
              FormHelperTextProps={{
                className: classes.helperText
              }}
            />
          </Grid>
        </Grid>
      </Box>
    );
  };

  return (
    <div className={classes.container}>
      <Paper elevation={0} className={classes.paper}>
        <Box mb={4} pb={1} className={classes.loginHeader}>
          <Typography variant="h5" style={{ fontWeight: "bold" }}>
            Welcome Back,
          </Typography>
          <Typography
            variant="caption"
            gutterBottom
            color="textSecondary"
            display="block"
          >
            Please fill both email and password field to log in.
          </Typography>
        </Box>
        <Formik
          initialValues={{ email: "", password: "", rememberMe: false }}
          onSubmit={async values => {
            await new Promise(resolve => setTimeout(resolve, 500));
            navigate("users");
          }}
          validationSchema={Yup.object().shape({
            email: Yup.string()
              .email()
              .required("required"),
            password: Yup.string().required("required"),
            rememberMe: Yup.boolean()
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
              //handleReset
            } = props;
            return (
              <form onSubmit={handleSubmit}>
                <CustomTextField
                  icon={<AccountCircleOutlined color="disabled" />}
                  id="email"
                  label="Email"
                  type="text"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  helperText={errors.email && touched.email ? errors.email : " "}
                  error={errors.email && touched.email}
                />
                <CustomTextField
                  icon={<LockOutlined color="disabled" />}
                  id="password"
                  label="Password"
                  type="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  helperText={errors.password && touched.password ? errors.password : " "}
                  error={errors.password && touched.password}
                />
                <Grid container alignItems="center" justify="space-between">
                  <Grid item>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={values.rememberMe}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          color="primary"
                          name="rememberMe"
                        />
                      }
                      label={<Typography variant="subtitle2">Remember Me</Typography>}
                    />
                  </Grid>
                  <Grid item>
                    <Typography variant="subtitle2">
                      <Link
                        onClick={() => {
                          console.info("I'm a button.");
                        }}
                        style={{
                          cursor: "pointer"
                        }}
                      >
                        Forgot Password?
                      </Link>
                    </Typography>
                  </Grid>
                </Grid>
                <Box mt={2}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary" /*onClick={() => navigate("/users")} */
                    fullWidth={true}
                    disabled={
                      !values.email ||
                      errors.email ||
                      !values.password ||
                      errors.password ||
                      isSubmitting
                    }
                  >
                    Log In
                  </Button>
                </Box>
              </form>
            );
          }}
        </Formik>
      </Paper>
    </div>
  );
};

export default LoginPage;

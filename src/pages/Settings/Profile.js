import {
  Avatar,
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  FormHelperText,
  Card,
  CardContent,
  CardActions
} from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import { makeStyles } from "@material-ui/styles";
import { Field, Formik, getIn } from "formik";
import { AsYouType } from "libphonenumber-js";
import React from "react";
import { Rifm } from "rifm";
import * as Yup from "yup";

const countries = [
  {
    value: "Afghanistan",
    label: "Afghanistan"
  },
  {
    value: "Albania",
    label: "Albania"
  },
  {
    value: "Algeria",
    label: "Algeria"
  },
  {
    value: "American Samoa",
    label: "American Samoa"
  },
  {
    value: "Andorra",
    label: "Andorra"
  },
  {
    value: "Angola",
    label: "Angola"
  },
  {
    value: "Anguilla",
    label: "Anguilla"
  },
  {
    value: "Antarctica",
    label: "Antarctica"
  },
  {
    value: "Antigua and Barbuda",
    label: "Antigua and Barbuda"
  },
  {
    value: "Argentina",
    label: "Argentina"
  },
  {
    value: "Armenia",
    label: "Armenia"
  },
  {
    value: "Aruba",
    label: "Aruba"
  },
  {
    value: "Australia",
    label: "Australia"
  },
  {
    value: "Austria",
    label: "Austria"
  },
  {
    value: "Azerbaijan",
    label: "Azerbaijan"
  },
  {
    value: "Bahamas",
    label: "Bahamas"
  },
  {
    value: "Bahrain",
    label: "Bahrain"
  },
  {
    value: "Bangladesh",
    label: "Bangladesh"
  },
  {
    value: "Barbados",
    label: "Barbados"
  },
  {
    value: "Belarus",
    label: "Belarus"
  },
  {
    value: "Belgium",
    label: "Belgium"
  },
  {
    value: "Belize",
    label: "Belize"
  },
  {
    value: "Benin",
    label: "Benin"
  },
  {
    value: "Bermuda",
    label: "Bermuda"
  },
  {
    value: "Bhutan",
    label: "Bhutan"
  },
  {
    value: "Bolivia",
    label: "Bolivia"
  },
  {
    value: "Bosnia and Herzegovina",
    label: "Bosnia and Herzegovina"
  },
  {
    value: "Botswana",
    label: "Botswana"
  },
  {
    value: "Bouvet Island",
    label: "Bouvet Island"
  },
  {
    value: "Brazil",
    label: "Brazil"
  },
  {
    value: "British Indian Ocean Territory",
    label: "British Indian Ocean Territory"
  },
  {
    value: "Brunei",
    label: "Brunei"
  },
  {
    value: "Bulgaria",
    label: "Bulgaria"
  },
  {
    value: "Burkina Faso",
    label: "Burkina Faso"
  },
  {
    value: "Burundi",
    label: "Burundi"
  },
  {
    value: "Cambodia",
    label: "Cambodia"
  },
  {
    value: "Cameroon",
    label: "Cameroon"
  },
  {
    value: "Canada",
    label: "Canada"
  },
  {
    value: "Cape Verde",
    label: "Cape Verde"
  },
  {
    value: "Cayman Islands",
    label: "Cayman Islands"
  },
  {
    value: "Central African Republic",
    label: "Central African Republic"
  },
  {
    value: "Chad",
    label: "Chad"
  },
  {
    value: "Chile",
    label: "Chile"
  },
  {
    value: "China",
    label: "China"
  },
  {
    value: "Christmas Island",
    label: "Christmas Island"
  },
  {
    value: "Cocos (Keeling) Islands",
    label: "Cocos (Keeling) Islands"
  },
  {
    value: "Colombia",
    label: "Colombia"
  },
  {
    value: "Comoros",
    label: "Comoros"
  },
  {
    value: "Congo",
    label: "Congo"
  },
  {
    value: "Cook Islands",
    label: "Cook Islands"
  },
  {
    value: "Costa Rica",
    label: "Costa Rica"
  },
  {
    value: "Croatia",
    label: "Croatia"
  },
  {
    value: "Cuba",
    label: "Cuba"
  },
  {
    value: "Cyprus",
    label: "Cyprus"
  },
  {
    value: "Czech Republic",
    label: "Czech Republic"
  },
  {
    value: "Denmark",
    label: "Denmark"
  },
  {
    value: "Djibouti",
    label: "Djibouti"
  },
  {
    value: "Dominica",
    label: "Dominica"
  },
  {
    value: "Dominican Republic",
    label: "Dominican Republic"
  },
  {
    value: "East Timor",
    label: "East Timor"
  },
  {
    value: "Ecuador",
    label: "Ecuador"
  },
  {
    value: "Egypt",
    label: "Egypt"
  },
  {
    value: "El Salvador",
    label: "El Salvador"
  },
  {
    value: "Equatorial Guinea",
    label: "Equatorial Guinea"
  },
  {
    value: "Eritrea",
    label: "Eritrea"
  },
  {
    value: "Estonia",
    label: "Estonia"
  },
  {
    value: "Ethiopia",
    label: "Ethiopia"
  },
  {
    value: "Falkland Islands",
    label: "Falkland Islands"
  },
  {
    value: "Faroe Islands",
    label: "Faroe Islands"
  },
  {
    value: "Fiji Islands",
    label: "Fiji Islands"
  },
  {
    value: "Finland",
    label: "Finland"
  },
  {
    value: "France",
    label: "France"
  },
  {
    value: "French Guiana",
    label: "French Guiana"
  },
  {
    value: "French Polynesia",
    label: "French Polynesia"
  },
  {
    value: "French Southern territories",
    label: "French Southern territories"
  },
  {
    value: "Gabon",
    label: "Gabon"
  },
  {
    value: "Gambia",
    label: "Gambia"
  },
  {
    value: "Georgia",
    label: "Georgia"
  },
  {
    value: "Germany",
    label: "Germany"
  },
  {
    value: "Ghana",
    label: "Ghana"
  },
  {
    value: "Gibraltar",
    label: "Gibraltar"
  },
  {
    value: "Greece",
    label: "Greece"
  },
  {
    value: "Greenland",
    label: "Greenland"
  },
  {
    value: "Grenada",
    label: "Grenada"
  },
  {
    value: "Guadeloupe",
    label: "Guadeloupe"
  },
  {
    value: "Guam",
    label: "Guam"
  },
  {
    value: "Guatemala",
    label: "Guatemala"
  },
  {
    value: "Guernsey",
    label: "Guernsey"
  },
  {
    value: "Guinea",
    label: "Guinea"
  },
  {
    value: "Guinea-Bissau",
    label: "Guinea-Bissau"
  },
  {
    value: "Guyana",
    label: "Guyana"
  },
  {
    value: "Haiti",
    label: "Haiti"
  },
  {
    value: "Heard Island and McDonald Islands",
    label: "Heard Island and McDonald Islands"
  },
  {
    value: "Holy See (Vatican City State)",
    label: "Holy See (Vatican City State)"
  },
  {
    value: "Honduras",
    label: "Honduras"
  },
  {
    value: "Hong Kong",
    label: "Hong Kong"
  },
  {
    value: "Hungary",
    label: "Hungary"
  },
  {
    value: "Iceland",
    label: "Iceland"
  },
  {
    value: "India",
    label: "India"
  },
  {
    value: "Indonesia",
    label: "Indonesia"
  },
  {
    value: "Iran",
    label: "Iran"
  },
  {
    value: "Iraq",
    label: "Iraq"
  },
  {
    value: "Ireland",
    label: "Ireland"
  },
  {
    value: "Isle of Man",
    label: "Isle of Man"
  },
  {
    value: "Israel",
    label: "Israel"
  },
  {
    value: "Italy",
    label: "Italy"
  },
  {
    value: "Ivory Coast",
    label: "Ivory Coast"
  },
  {
    value: "Jamaica",
    label: "Jamaica"
  },
  {
    value: "Japan",
    label: "Japan"
  },
  {
    value: "Jersey",
    label: "Jersey"
  },
  {
    value: "Jordan",
    label: "Jordan"
  },
  {
    value: "Kazakhstan",
    label: "Kazakhstan"
  },
  {
    value: "Kenya",
    label: "Kenya"
  },
  {
    value: "Kiribati",
    label: "Kiribati"
  },
  {
    value: "Kuwait",
    label: "Kuwait"
  },
  {
    value: "Kyrgyzstan",
    label: "Kyrgyzstan"
  },
  {
    value: "Laos",
    label: "Laos"
  },
  {
    value: "Latvia",
    label: "Latvia"
  },
  {
    value: "Lebanon",
    label: "Lebanon"
  },
  {
    value: "Lesotho",
    label: "Lesotho"
  },
  {
    value: "Liberia",
    label: "Liberia"
  },
  {
    value: "Libyan Arab Jamahiriya",
    label: "Libyan Arab Jamahiriya"
  },
  {
    value: "Liechtenstein",
    label: "Liechtenstein"
  },
  {
    value: "Lithuania",
    label: "Lithuania"
  },
  {
    value: "Luxembourg",
    label: "Luxembourg"
  },
  {
    value: "Macao",
    label: "Macao"
  },
  {
    value: "North Macedonia",
    label: "North Macedonia"
  },
  {
    value: "Madagascar",
    label: "Madagascar"
  },
  {
    value: "Malawi",
    label: "Malawi"
  },
  {
    value: "Malaysia",
    label: "Malaysia"
  },
  {
    value: "Maldives",
    label: "Maldives"
  },
  {
    value: "Mali",
    label: "Mali"
  },
  {
    value: "Malta",
    label: "Malta"
  },
  {
    value: "Marshall Islands",
    label: "Marshall Islands"
  },
  {
    value: "Martinique",
    label: "Martinique"
  },
  {
    value: "Mauritania",
    label: "Mauritania"
  },
  {
    value: "Mauritius",
    label: "Mauritius"
  },
  {
    value: "Mayotte",
    label: "Mayotte"
  },
  {
    value: "Mexico",
    label: "Mexico"
  },
  {
    value: "Micronesia, Federated States of",
    label: "Micronesia, Federated States of"
  },
  {
    value: "Moldova",
    label: "Moldova"
  },
  {
    value: "Monaco",
    label: "Monaco"
  },
  {
    value: "Mongolia",
    label: "Mongolia"
  },
  {
    value: "Montenegro",
    label: "Montenegro"
  },
  {
    value: "Montserrat",
    label: "Montserrat"
  },
  {
    value: "Morocco",
    label: "Morocco"
  },
  {
    value: "Mozambique",
    label: "Mozambique"
  },
  {
    value: "Myanmar",
    label: "Myanmar"
  },
  {
    value: "Namibia",
    label: "Namibia"
  },
  {
    value: "Nauru",
    label: "Nauru"
  },
  {
    value: "Nepal",
    label: "Nepal"
  },
  {
    value: "Netherlands",
    label: "Netherlands"
  },
  {
    value: "Netherlands Antilles",
    label: "Netherlands Antilles"
  },
  {
    value: "New Caledonia",
    label: "New Caledonia"
  },
  {
    value: "New Zealand",
    label: "New Zealand"
  },
  {
    value: "Nicaragua",
    label: "Nicaragua"
  },
  {
    value: "Niger",
    label: "Niger"
  },
  {
    value: "Nigeria",
    label: "Nigeria"
  },
  {
    value: "Niue",
    label: "Niue"
  },
  {
    value: "Norfolk Island",
    label: "Norfolk Island"
  },
  {
    value: "North Korea",
    label: "North Korea"
  },
  {
    value: "Northern Ireland",
    label: "Northern Ireland"
  },
  {
    value: "Northern Mariana Islands",
    label: "Northern Mariana Islands"
  },
  {
    value: "Norway",
    label: "Norway"
  },
  {
    value: "Oman",
    label: "Oman"
  },
  {
    value: "Pakistan",
    label: "Pakistan"
  },
  {
    value: "Palau",
    label: "Palau"
  },
  {
    value: "Palestine",
    label: "Palestine"
  },
  {
    value: "Panama",
    label: "Panama"
  },
  {
    value: "Papua New Guinea",
    label: "Papua New Guinea"
  },
  {
    value: "Paraguay",
    label: "Paraguay"
  },
  {
    value: "Peru",
    label: "Peru"
  },
  {
    value: "Philippines",
    label: "Philippines"
  },
  {
    value: "Pitcairn",
    label: "Pitcairn"
  },
  {
    value: "Poland",
    label: "Poland"
  },
  {
    value: "Portugal",
    label: "Portugal"
  },
  {
    value: "Puerto Rico",
    label: "Puerto Rico"
  },
  {
    value: "Qatar",
    label: "Qatar"
  },
  {
    value: "Reunion",
    label: "Reunion"
  },
  {
    value: "Romania",
    label: "Romania"
  },
  {
    value: "Russian Federation",
    label: "Russian Federation"
  },
  {
    value: "Rwanda",
    label: "Rwanda"
  },
  {
    value: "Saint Helena",
    label: "Saint Helena"
  },
  {
    value: "Saint Kitts and Nevis",
    label: "Saint Kitts and Nevis"
  },
  {
    value: "Saint Lucia",
    label: "Saint Lucia"
  },
  {
    value: "Saint Pierre and Miquelon",
    label: "Saint Pierre and Miquelon"
  },
  {
    value: "Saint Vincent and the Grenadines",
    label: "Saint Vincent and the Grenadines"
  },
  {
    value: "Samoa",
    label: "Samoa"
  },
  {
    value: "San Marino",
    label: "San Marino"
  },
  {
    value: "Sao Tome and Principe",
    label: "Sao Tome and Principe"
  },
  {
    value: "Saudi Arabia",
    label: "Saudi Arabia"
  },
  {
    value: "Senegal",
    label: "Senegal"
  },
  {
    value: "Serbia",
    label: "Serbia"
  },
  {
    value: "Seychelles",
    label: "Seychelles"
  },
  {
    value: "Sierra Leone",
    label: "Sierra Leone"
  },
  {
    value: "Singapore",
    label: "Singapore"
  },
  {
    value: "Slovakia",
    label: "Slovakia"
  },
  {
    value: "Slovenia",
    label: "Slovenia"
  },
  {
    value: "Solomon Islands",
    label: "Solomon Islands"
  },
  {
    value: "Somalia",
    label: "Somalia"
  },
  {
    value: "South Africa",
    label: "South Africa"
  },
  {
    value: "South Georgia and the South Sandwich Islands",
    label: "South Georgia and the South Sandwich Islands"
  },
  {
    value: "South Korea",
    label: "South Korea"
  },
  {
    value: "South Sudan",
    label: "South Sudan"
  },
  {
    value: "Spain",
    label: "Spain"
  },
  {
    value: "Sri Lanka",
    label: "Sri Lanka"
  },
  {
    value: "Sudan",
    label: "Sudan"
  },
  {
    value: "Suriname",
    label: "Suriname"
  },
  {
    value: "Svalbard and Jan Mayen",
    label: "Svalbard and Jan Mayen"
  },
  {
    value: "Swaziland",
    label: "Swaziland"
  },
  {
    value: "Sweden",
    label: "Sweden"
  },
  {
    value: "Switzerland",
    label: "Switzerland"
  },
  {
    value: "Syria",
    label: "Syria"
  },
  {
    value: "Tajikistan",
    label: "Tajikistan"
  },
  {
    value: "Tanzania",
    label: "Tanzania"
  },
  {
    value: "Thailand",
    label: "Thailand"
  },
  {
    value: "The Democratic Republic of Congo",
    label: "The Democratic Republic of Congo"
  },
  {
    value: "Timor-Leste",
    label: "Timor-Leste"
  },
  {
    value: "Togo",
    label: "Togo"
  },
  {
    value: "Tokelau",
    label: "Tokelau"
  },
  {
    value: "Tonga",
    label: "Tonga"
  },
  {
    value: "Trinidad and Tobago",
    label: "Trinidad and Tobago"
  },
  {
    value: "Tunisia",
    label: "Tunisia"
  },
  {
    value: "Turkey",
    label: "Turkey"
  },
  {
    value: "Turkmenistan",
    label: "Turkmenistan"
  },
  {
    value: "Turks and Caicos Islands",
    label: "Turks and Caicos Islands"
  },
  {
    value: "Tuvalu",
    label: "Tuvalu"
  },
  {
    value: "Uganda",
    label: "Uganda"
  },
  {
    value: "Ukraine",
    label: "Ukraine"
  },
  {
    value: "United Arab Emirates",
    label: "United Arab Emirates"
  },
  {
    value: "United Kingdom",
    label: "United Kingdom"
  },
  {
    value: "United States",
    label: "United States"
  },
  {
    value: "United States Minor Outlying Islands",
    label: "United States Minor Outlying Islands"
  },
  {
    value: "Uruguay",
    label: "Uruguay"
  },
  {
    value: "Uzbekistan",
    label: "Uzbekistan"
  },
  {
    value: "Vanuatu",
    label: "Vanuatu"
  },
  {
    value: "Venezuela",
    label: "Venezuela"
  },
  {
    value: "Vietnam",
    label: "Vietnam"
  },
  {
    value: "Virgin Islands, British",
    label: "Virgin Islands, British"
  },
  {
    value: "Virgin Islands, U.S.",
    label: "Virgin Islands, U.S."
  },
  {
    value: "Wallis and Futuna",
    label: "Wallis and Futuna"
  },
  {
    value: "Western Sahara",
    label: "Western Sahara"
  },
  {
    value: "Yemen",
    label: "Yemen"
  },
  {
    value: "Yugoslavia",
    label: "Yugoslavia"
  },
  {
    value: "Zambia",
    label: "Zambia"
  },
  {
    value: "Zimbabwe",
    label: "Zimbabwe"
  }
];

const parseDigits = string => (string.match(/\d+/g) || []).join("");

const formatPhone = string => {
  const digits = parseDigits(string).substr(0, 10);
  return new AsYouType("US").input(digits);
};

const SUPPORTED_FORMATS = ["image/jpg", "image/png", "image/jpeg"];

const MAX_FILE_SIZE = 5000 * 1000; // 5mb

const useStyles = makeStyles(theme => ({
  fileFieldWrapper: {
    display: "flex",
    alignItems: "center",
    marginTop: theme.spacing(4),
    paddingBottom: theme.spacing(2),
    borderBottom: `1px solid ${theme.palette.grey[300]}`
  },
  fileInputPreview: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    marginRight: theme.spacing(2)
  },
  fileInputWraper: {
    position: "relative",
    width: 160,
    height: 36,
    backgroundColor: theme.palette.primary.light,
    borderRadius: 8,
    color: theme.palette.primary.main,
    marginRight: theme.spacing(1),
    fontWeight: "bold",
    "& span": {
      width: "100%",
      height: "100%",
      display: "flex",
      position: "absolute",
      textAlign: "center",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 1
    }
  },
  fileInput: {
    padding: "0",
    opacity: "0",
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    cursor: "pointer",
    zIndex: 2,
    fontSize: 0
  },
  formHelperText: {
    color: theme.palette.secondary.main
  }
}));

const ProfileSettingsPage = () => {
  const classes = useStyles();
  return (
    <Formik
      initialValues={{
        photo: "",
        first_name: "",
        last_name: "",
        email: "",
        phone_number: "",
        address_street_1: "",
        address_street_2: "",
        city: "",
        state: "",
        zip_code: "",
        country: {
          value: "",
          label: ""
        }
      }}
      onSubmit={async values => {
        await new Promise(resolve => setTimeout(resolve, 500));
        alert("added!");
      }}
      validationSchema={Yup.object().shape({
        photo: Yup.mixed()
          .required("photo is required")
          .test(
            "fileSize",
            "File too large",
            value => value && value.size <= MAX_FILE_SIZE
          )
          .test(
            "fileFormat",
            "Unsupported Format",
            value => value && SUPPORTED_FORMATS.includes(value.type)
          ),
        first_name: Yup.string().required("first name is required"),
        last_name: Yup.string().required("last name is required"),
        email: Yup.string()
          .email()
          .required("email is required"),
        phone_number: Yup.string().required("phone number is required"),
        address_street_1: Yup.string().required("address street is required"),
        address_street_2: Yup.string(),
        city: Yup.string().required("city is required"),
        state: Yup.string().required("state is required"),
        zip_code: Yup.string().required("zip code is required"),
        country: Yup.object().shape({
          value: Yup.string().required("country is required"),
          label: Yup.string().required("country is required")
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
          setFieldValue,
          setFieldTouched
          //setValues,
          //handleReset
        } = props;
        return (
          <Card variant="outlined">
            <form onSubmit={handleSubmit}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  <b>Profile</b>
                </Typography>
                <Box mb={2}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <div className={classes.fileFieldWrapper}>
                        <Avatar
                          alt="Remy Sharp"
                          src={
                            values.photo &&
                            !errors.photo &&
                            URL.createObjectURL(values.photo)
                          }
                          className={classes.fileInputPreview}
                        />
                        <Field
                          id="photo"
                          name="photo"
                          render={() => (
                            <div className={classes.fileInputWraper}>
                              <input
                                className={classes.fileInput}
                                type="file"
                                accept={SUPPORTED_FORMATS}
                                onChange={e => setFieldValue("photo", e.target.files[0])}
                                onBlur={() => setFieldTouched("photo", true)}
                              />
                              <span>Upload a new photo</span>
                            </div>
                          )}
                        />
                        <Button
                          color="secondary"
                          onClick={() => setFieldValue("photo", "")}
                          disabled={!values.photo}
                        >
                          Delete
                        </Button>
                      </div>
                      <FormHelperText className={classes.formHelperText}>
                        {errors.photo && touched.photo ? errors.photo : " "}
                      </FormHelperText>
                      {/* <TextField
                    fullWidth
                    required
                    id="photo"
                    label="Photo"
                    type="file"
                    accept={SUPPORTED_FORMATS}
                    onChange={e => setFieldValue("photo", e.target.files[0])}
                    onBlur={handleBlur}
                    helperText={
                      errors.photo && touched.photo ? errors.photo : " "
                    }
                    error={errors.photo && touched.photo}
                  /> */}
                    </Grid>
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
                          errors.first_name && touched.first_name
                            ? errors.first_name
                            : " "
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
                    <Grid item xs={8}>
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
                        name="phone_number"
                        render={({ field, form }) => (
                          <Rifm
                            format={formatPhone}
                            onChange={val => form.setFieldValue("phone_number", val)}
                            value={field.value}
                          >
                            {({ value, onChange }) => (
                              <TextField
                                fullWidth
                                required
                                id="phone_number"
                                label="Phone Number"
                                type="text"
                                value={value}
                                onChange={onChange}
                                onBlur={() => setFieldTouched("phone_number", true)}
                                helperText={
                                  getIn(errors, "phone_number") &&
                                  getIn(touched, "phone_number")
                                    ? getIn(errors, "phone_number")
                                    : " "
                                }
                                error={
                                  getIn(errors, "phone_number") &&
                                  getIn(touched, "phone_number")
                                }
                              />
                            )}
                          </Rifm>
                        )}
                      />
                    </Grid>
                  </Grid>
                </Box>
                <Typography variant="subtitle1" gutterBottom>
                  <b>Address</b>
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      required
                      id="address_street_1"
                      label="Address Street"
                      type="text"
                      value={values.address_street_1}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      helperText={
                        errors.address_street_1 && touched.address_street_1
                          ? errors.address_street_1
                          : " "
                      }
                      error={errors.address_street_1 && touched.address_street_1}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      id="address_street_2"
                      label="Address Street 2"
                      type="text"
                      value={values.address_street_2}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      helperText={
                        errors.address_street_2 && touched.address_street_2
                          ? errors.address_street_2
                          : " "
                      }
                      error={errors.address_street_2 && touched.address_street_2}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      fullWidth
                      required
                      id="city"
                      label="City"
                      type="text"
                      value={values.city}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      helperText={errors.city && touched.city ? errors.city : " "}
                      error={errors.city && touched.city}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      fullWidth
                      required
                      id="state"
                      label="State"
                      type="text"
                      value={values.state}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      helperText={errors.state && touched.state ? errors.state : " "}
                      error={errors.state && touched.state}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      fullWidth
                      required
                      id="zip_code"
                      label="Zip Code"
                      type="text"
                      value={values.zip_code}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      helperText={
                        errors.zip_code && touched.zip_code ? errors.zip_code : " "
                      }
                      error={errors.zip_code && touched.zip_code}
                    />
                  </Grid>
                  <Grid item xs={8}>
                    <Autocomplete
                      id="country"
                      options={countries}
                      getOptionLabel={option => option.value}
                      value={values.country}
                      onChange={(e, value) => setFieldValue("country", value)}
                      onBlur={() => setFieldTouched("country", true)}
                      disableClearable={true}
                      renderInput={params => (
                        <TextField
                          {...params}
                          required
                          label="Country"
                          helperText={
                            errors.country && touched.country ? errors.country.value : " "
                          }
                          error={errors.country && touched.country}
                        />
                      )}
                    />
                  </Grid>
                </Grid>
              </CardContent>
              <CardActions>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="large"
                  disabled={
                    !values.photo ||
                    errors.photo ||
                    !values.first_name ||
                    errors.first_name ||
                    !values.last_name ||
                    errors.last_name ||
                    !values.email ||
                    errors.email ||
                    !values.phone_number ||
                    errors.phone_number ||
                    !values.address_street_1 ||
                    errors.address_street_1 ||
                    errors.address_street_2 ||
                    !values.city ||
                    errors.city ||
                    !values.state ||
                    errors.state ||
                    !values.zip_code ||
                    errors.zip_code ||
                    !values.country ||
                    errors.country ||
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

export default ProfileSettingsPage;

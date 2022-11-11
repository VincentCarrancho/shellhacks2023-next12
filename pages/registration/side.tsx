/*
Initial registration page.
The fields required are first name, last name, email, phone number and passwords
*/

import { useState, useEffect } from "react";
import { TextField, Button, Typography, Grid, Box } from "@mui/material";
import { useFormik } from "formik";

// TODO: add form validation to this
// TODO: Fix CSS

export default function SideFields() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit(values, formikHelpers) {
      console.log(values);
    },
  });

  const values = formik.values;

  return (
    <>
      <Box
        // outer box
        sx={{
          height: "100vh",
          padding: "250px 75px",
        }}
      >
        <Box
          sx={{
            display: "flex",
          }}
        >
          <form
            onSubmit={formik.handleSubmit}
            // @ts-ignore
            onReset={formik.resetForm}
          >
            <Typography>Register for ShellHacks</Typography>
            <Grid container rowSpacing={2} columnSpacing={1}>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <TextField
                  id="First-Name"
                  name="firstName"
                  value={values.firstName}
                  onChange={formik.handleChange}
                  placeholder="First Name"
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <TextField
                  id="Last-Name"
                  name="lastName"
                  value={values.lastName}
                  onChange={formik.handleChange}
                  placeholder="Last Name"
                />
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <TextField
                  id="Email"
                  name="email"
                  value={values.email}
                  onChange={formik.handleChange}
                  placeholder="Email"
                  sx={{
                    width: "100%",
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <TextField
                  id="Phone-Number"
                  name="phoneNumber"
                  value={values.phoneNumber}
                  onChange={formik.handleChange}
                  placeholder="Phone Number"
                  sx={{
                    width: "100%",
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <TextField
                  id="Password"
                  type="password"
                  name="password"
                  value={values.password}
                  onChange={formik.handleChange}
                  placeholder="Password"
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <TextField
                  id="Confirm-Password"
                  type="password"
                  name="confirmPassword"
                  value={values.confirmPassword}
                  onChange={formik.handleChange}
                  placeholder="Confirm Password"
                />
              </Grid>
              <Button type="submit">Submit</Button>
              <Button type="reset">Reset</Button>
            </Grid>
          </form>
        </Box>
      </Box>
    </>
  );
}

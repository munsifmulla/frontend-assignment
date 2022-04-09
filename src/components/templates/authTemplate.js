import React from "react";
import { Grid } from "@mui/material";
import useStyles from "./styles";

const AuthLayout = ({ children }) => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={12} className={classes.appHeader}>
        <header>
          <img
            src="https://static-assets.animall.in/static/images/animall-logo-2021.png"
            alt="Animall"
            className={classes.logo}
          />
        </header>
      </Grid>
      <Grid item xs={12}>
        <section className={classes.appBody}>{children}</section>
      </Grid>
    </Grid>
  );
};

export default AuthLayout;

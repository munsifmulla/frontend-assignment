import React from "react";
import { useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";
import useStyles from "./styles";

const AuthLayout = ({ children }) => {
  const classes = useStyles();
  const history = useNavigate();
  let path = window.location.pathname;
  const toggleNavigate = _ => {
    path === "/slider" ? history("/") : history("/slider");
  };
  return (
    <Grid container style={{ backgroun: "#fefefe" }}>
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
      <div className={classes.link} onClick={_ => toggleNavigate()}>
        {path === "/slider" ? "V1" : "V2"}
      </div>
    </Grid>
  );
};

export default AuthLayout;

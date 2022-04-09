import React from "react";
import { Card, Grid } from "@mui/material";
import Slider from "./slider";
import Details from "./details";
import Location from "./location";
import useStyles from "./style";

const CardComponet = ({ details }) => {
  const classes = useStyles();

  const parsedResources = details.resources.map(item => JSON.parse(item));

  return (
    <Grid item xs={12} sm={6} md={4}>
      <div className={classes.card}>
        <Slider images={parsedResources} classes={classes} />
        <Location />
        <Details />
      </div>
    </Grid>
  );
};

export default CardComponet;

import React from "react";
import { Grid } from "@mui/material";
import Card from "components/atoms/card";

const CardGrid = ({ data, type = "grid" }) => {
  return (
    <Grid container spacing={3}>
      {data.map(item => (
        <Card details={item} type={type} />
      ))}
    </Grid>
  );
};

export default CardGrid;

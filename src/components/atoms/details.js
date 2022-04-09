import React from "react";
import { Grid } from "@mui/material";
import { numberFormatter } from "utils";

const Details = ({
  animalDetails: { breed, age, gender, lactation, seller, price, animalType },
  classes,
}) => {
  return (
    <div className={classes.details}>
      <h4 className={classes.detailsName}>{breed.toUpperCase()}</h4>
      <Grid container justify="space-between">
        <Grid item xs={6}>
          <ul className={classes.detailsList}>
            <li>Type: {animalType}</li>
            <li>Gender: {gender}</li>
            <li>Age: {age} yrs.</li>
            <li>Lactation: {lactation}</li>
            <li className={classes.detailsSeller}>
              <img src="/farmer.svg" /> {seller}
            </li>
          </ul>
        </Grid>
        <Grid item xs={6} style={{ textAlign: "right" }}>
          <div className={classes.price}>Rs {numberFormatter(price)}</div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Details;

import React from "react";
import { Button, Grid, Box } from "@mui/material";
import Slider from "./slider";
import PhotoGrid from "./photoGrid";
import Details from "./details";
import Location from "./location";
import useStyles from "./style";
import { dialNumber } from "utils";

const CardComponet = ({ details, type = "grid" }) => {
  const classes = useStyles();

  const parsedResources = details.resources.map(item => JSON.parse(item));

  const generateDetails = details => ({
    gender: details.gender,
    animalType: details.animalType,
    age: details.age,
    breed: details.breed,
    lactation: details.lactation,
    seller: details.seller,
    price: details.price,
  });

  const generateLocation = details => ({
    location: details.locationName,
    coords: JSON.parse(details.location),
  });

  return (
    <Grid item xs={12} sm={6} md={4}>
      <div className={classes.card}>
        {type === "slider" ? (
          <Slider images={parsedResources} classes={classes} />
        ) : (
          <PhotoGrid images={parsedResources} classes={classes} />
        )}

        <Box className={classes.cardContainer}>
          <Location
            classes={classes}
            locationDetails={generateLocation(details)}
          />
          <Details animalDetails={generateDetails(details)} classes={classes} />
          <Box>
            <Button
              fullWidth
              variant="contained"
              onClick={_ => dialNumber(details.contact)}
            >
              Call
            </Button>
          </Box>
        </Box>
      </div>
    </Grid>
  );
};

export default CardComponet;

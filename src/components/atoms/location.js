import React from "react";
import useLocation from "hooks/useLocation";
import { numberFormatter } from "utils";

const Location = ({
  locationDetails: {
    location,
    coords: { coordinates },
  },
  classes,
}) => {
  const distance = useLocation(coordinates);
  return (
    <>
      <div className={classes.location}>
        <img src="/location_pointer.svg" alt="" />
        <span>
          {isNaN(distance) ? "--" : numberFormatter(distance)}
          kms
        </span>
        <img src="/location.svg" alt="" />
      </div>
      <div className={classes.locationDetails}>
        <div>Curr Loc.</div>
        <div className={classes.locationName}>{location.substring(0, 30)}</div>
      </div>
    </>
  );
};

export default Location;

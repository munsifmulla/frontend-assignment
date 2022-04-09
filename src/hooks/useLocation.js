import { useState, useEffect } from "react";
import { checkCoordinatesDistance } from "utils";

const useLocation = coordinates => {
  const [loc, setLoc] = useState({});
  useEffect(() => {
    async function getData() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
      } else {
        console.log("Geolocation is not supported by this browser.");
      }
    }
    function showPosition(position) {
      setLoc({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    }

    getData();
  }, []);

  return checkCoordinatesDistance(
    loc.lat,
    loc.lng,
    coordinates[0],
    coordinates[1]
  ).toFixed(2);
};

export default useLocation;

export function checkCoordinatesDistance(lat1, lon1, lat2, lon2) {
  //   console.log("DISTANCE CHECK: ", lat1, lon1, lat2, lon2);
  let dLat, dLon, a, c, d;
  const R = 6371; // Radius of the earth in km
  if (lat2 && lon2) {
    dLat = (lat2 - lat1) * (Math.PI / 180);
    dLon = (lon2 - lon1) * (Math.PI / 180);
    a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * (Math.PI / 180)) *
        Math.cos(lat2 * (Math.PI / 180)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    d = R * c; // Distance in km
  }
  return d - R;
}

export function numberFormatter(number) {
  return new Intl.NumberFormat("en-IN", { maximumSignificantDigits: 3 }).format(
    number
  );
}

export function dialNumber(number) {
  window.open("tel:" + number);
}

export function getExtension(url) {
  return url.split(/[#?]/)[0].split(".").pop().trim();
}
export function imageExists(imageUrl) {
  var http = new XMLHttpRequest();

  http.open("HEAD", imageUrl, false);
  http.send();

  return http.status;
}

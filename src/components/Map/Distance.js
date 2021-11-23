function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2 - lat1); // deg2rad below
  var dLon = deg2rad(lon2 - lon1);
  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c; // Distance in km
  return d;
}

function deg2rad(deg) {
  return deg * (Math.PI / 180);
}

const distance = getDistanceFromLatLonInKm(
  23.886269337158218,
  90.97032666206361,
  23.883198795079437,
  90.97020864486696
);
console.log(distance);

fetchDistanceBetweenPoints = (lat1, lng1, lat2, lng2) => {
  // Pass Latitude & Longitude of both points as a parameter

  var urlToFetchDistance =
    "https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&origins=" +
    lat1 +
    "," +
    lng1 +
    "&destinations=" +
    lat2 +
    "%2C" +
    lng2 +
    "&key=" +
    "AIzaSyCkUOdZ5y7hMm0yrcCQoCvLwzdM6M8s5qk";

  axios(urlToFetchDistance)
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      var distanceString = res.rows[0].elements[0].distance.text;

      // Do your stuff here
    })
    .catch((error) => {
      console.log("Problem occurred");
    });
};

fetchDistanceBetweenPoints(
  23.886269337158218,
  90.97032666206361,
  23.883198795079437,
  90.97020864486696
);

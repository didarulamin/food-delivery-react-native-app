import React from "react";
import { View, Text, Button } from "react-native";
import axios from "axios";
//AIzaSyBbIPyKkCS9VXlREMyRfphuGgh_AAc4ttk
export default function Restaurant() {
  const [restaurant, setRestaurant] = React.useState([]);
  const radius = "&radius=2000";
  const type = "&keyword=restaurant";
  const key = "&key=AIzaSyCkUOdZ5y7hMm0yrcCQoCvLwzdM6M8s5qk";
  const latitude = "24.607300";
  const longitude = "84.123299";
  const location = `location=${latitude},${longitude}`;
  // const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?${location}${radius}${type}${key}`;

  const fetchDistanceBetweenPoints = (lat1, lng1, lat2, lng2) => {
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

  const handleRestaurantSearch = () => {
    const url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?";

    const restaurantSearchUrl = url + location + radius + type + key;
    fetch(restaurantSearchUrl)
      .then((response) => response.json())
      .then((result) => setRestaurant({ restaurantList: result }));
  };

  console.log(restaurant);

  return (
    <View>
      <Text></Text>
      <Button title="Restaurants" onPress={handleRestaurantSearch}></Button>
    </View>
  );
}

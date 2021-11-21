import React, { useEffect, useState } from "react";
import { View, Text, PermissionsAndroid } from "react-native";
import * as Location from "expo-location";
export default function test() {
  Location.installWebGeolocationPolyfill();

  useEffect(() => {
    /* const location = window.navigator.geolocation.getCurrentPosition();
    console.log(location); */

    const requestCameraPermission = async () => {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: "Cool Photo App Camera Permission",
            message:
              "Cool Photo App needs access to your camera " +
              "so you can take awesome pictures.",
            buttonNeutral: "Ask Me Later",
            buttonNegative: "Cancel",
            buttonPositive: "OK",
          }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log("You can use the camera");
          /* const location = await Location.startLocationUpdatesAsync("first", {
            accuracy: Location.Accuracy.Balanced,
            timeInterval: 1000,
          }); */
          (async () => {
            let location = await Location.getCurrentPositionAsync({
              accuracy: Location.Accuracy.High,
              timeInterval: 20000,
            });

            console.log("location map", location);
            // setLocation(location);
            /*  setmapRegion({
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
              latitudeDelta: 0.003,
              longitudeDelta: 0.0035,
              accuracy: location.coords.accuracy,
            }); */
          })();
        } else {
          console.log("Camera permission denied");
        }
      } catch (err) {
        console.warn(err);
      }
    };
    requestCameraPermission();
  });

  return (
    <View>
      <Text>Home</Text>
    </View>
  );
}

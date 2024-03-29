import React, { useRef, useState, useEffect } from "react";
import { Platform, Text, View, StyleSheet, Dimensions } from "react-native";
import Constants from "expo-constants";
import * as Location from "expo-location";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
// import * as TaskManager from "expo-task-manager";
// import { TouchableOpacity } from "react-native-web";
Location.installWebGeolocationPolyfill();
// const LOCATION_TASK_NAME = "background-location-task";

export default function Map() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const ref = useRef(null);
  const [mapRegion, setmapRegion] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.09,
    longitudeDelta: 0.035,
  });

  useEffect(() => {
    (async () => {
      if (Platform.OS === "android" && !Constants.isDevice) {
        setErrorMsg(
          "Oops, this will not work on Snack in an Android emulator. Try it on your device!"
        );
        return;
      }
      let { status } = await Location.requestForegroundPermissionsAsync();
      // let { status } = await Location.requestBackgroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      /*  await Location.startLocationUpdatesAsync("first", {
        accuracy: Location.Accuracy.Balanced,
        timeInterval: 1000,
      }); */

      let location1 = await Location.watchPositionAsync(
        { accuracy: Location.Accuracy.High },
        (loc) => {
          console.log(loc, "watch");
          setLocation(loc);
        }
      );

      console.log("location", location);
      setmapRegion({
        latitude: location?.coords.latitude,
        longitude: location?.coords.longitude,
        latitudeDelta: 0.003,
        longitudeDelta: 0.0035,
        accuracy: location.coords.accuracy,
      });
      // console.log("location", location);
      // setLocation(location);
    })();
  }, []);

  /*   useEffect(() => {
    (async () => {
      let location = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.High,
        timeInterval: 20000,
      }); 

      let location1 = await Location.watchPositionAsync(
        { accuracy: Location.Accuracy.High },
        (loc) => {
          console.log(loc.coords, "watch");
          setLocation(loc);
        }
      );

      //   setLocation(location);
      console.log(location.coords.accuracy);

      setmapRegion({
        latitude: location.coords?.latitude,
        longitude: location.coords?.longitude,
        latitudeDelta: 0.003,
        longitudeDelta: 0.0035,
        accuracy: location.coords?.accuracy,
      });
    })();
  }, []);
 */
  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  // console.log(text, location?.coords?.accuracy);

  return (
    <View style={styles.container}>
      {/* <Text style={styles.paragraph}>{text}</Text> */}
      <MapView
        style={{ alignSelf: "stretch", height: "100%" }}
        region={{
          mapRegion,
        }}
        ref={ref}
        // onRegionChange={(region) => setmapRegion(region)}
        /*   onMapReady={() => {
          ref?.current?.fitToSuppliedMarkers(["mk1"], {
            edgePadding: { top: 150, right: 50, bottom: 50, left: 50 },
          });
        }} */
        style={styles.map}
        provider={PROVIDER_GOOGLE}
      >
        <Marker
          coordinate={{
            latitude: mapRegion.latitude,
            longitude: mapRegion.longitude,
          }}
          pinColor={"purple"} // any color
          title={"Didarul Amin"}
          description={"description"}
        />
        <MapView.Circle
          center={{
            latitude: mapRegion.latitude,
            longitude: mapRegion.longitude,
          }}
          radius={mapRegion?.accuracy}
          strokeWidth={2}
          strokeColor="#3399ff"
          fillColor="#80bfff"
        />
      </MapView>
      {/* <PermissionsButton /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    //Dimensions.get("window").height
    height: "100%",
  },
});

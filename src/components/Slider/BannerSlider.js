import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Swiper from "react-native-swiper";
export default function BannerSlider() {
  return (
    <Swiper style={styles.wrapper} showsButtons={true} autoplay>
      <View style={styles.slide1}>
        {/* <Text style={styles.text}>Hello Swiper</Text> */}
        <Image
          source={require("./slide1.jpg")}
          resizeMode="cover"
          style={{ width: "100%", height: "100%" }}
        />
      </View>
      <View style={styles.slide2}>
        <Image
          source={require("./slide2.jpg")}
          resizeMode="cover"
          style={{ width: "100%", height: "100%" }}
        />
      </View>
      <View style={styles.slide3}>
        <Image
          source={require("./slide3.jpg")}
          resizeMode="cover"
          style={{ width: "100%", height: "100%" }}
        />
      </View>
    </Swiper>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    // height: 300,
  },
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9DD6EB",
  },
  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#97CAE5",
  },
  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#92BBD9",
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
});

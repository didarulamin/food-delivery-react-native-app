import React from "react";
import { View, Text, StyleSheet } from "react-native";
import SwipeSheet from "../components/DragableSheet/SwipeSheet";
import RestaurantDetailsData from "../components/RestaurantDetailsData/RestaurantDetailsData";
import Example2 from "./sheet";
import { useRoute } from "@react-navigation/native";
import { useSelector } from "react-redux";
// import { LoremIpsum } from "./LoremIpsum";

export default function RestaurantDetails() {
  const route = useRoute();

  const RestaurantData = route.params.item;
  const { res_img } = route.params.item;
  const Details = <RestaurantDetailsData RestaurantData={RestaurantData} />;
  return (
    <View style={styles.container}>
      <SwipeSheet content={Details} image={{ uri: res_img }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 20,
    // backgroundColor: "red",
  },
});

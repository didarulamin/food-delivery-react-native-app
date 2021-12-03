import React from "react";
import { View, Text, StyleSheet } from "react-native";
import SwipeSheet from "../components/DragableSheet/SwipeSheet";
import RestaurantDetailsData from "../components/RestaurantDetailsData/RestaurantDetailsData";
import Example2 from "./sheet";
import { useRoute } from "@react-navigation/native";
// import { LoremIpsum } from "./LoremIpsum";

export default function RestaurantDetails() {
  const route = useRoute();
  const RestaurantData = route.params.item;
  const { image } = route.params.item;
  const Details = <RestaurantDetailsData RestaurantData={RestaurantData} />;
  return (
    <View style={styles.container}>
      <SwipeSheet content={Details} image={image} />
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

import React from "react";
import { View, Text, StyleSheet } from "react-native";
import SwipeSheet from "../components/DragableSheet/SwipeSheet";
import RestaurantDetailsData from "../components/RestaurantDetailsData/RestaurantDetailsData";
// import { LoremIpsum } from "./LoremIpsum";

export default function RestaurantDetails() {
  return (
    <View>
      <SwipeSheet>
        <View style={styles.container}>
          <RestaurantDetailsData />
        </View>
      </SwipeSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

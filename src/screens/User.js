import React from "react";
import { View, Text } from "react-native";
import UserDetailsData from "../components/UserDetailsData/UserDetailsData";
import SwipeSheet from "../components/DragableSheet/SwipeSheet";
import Header from "../components/Header/Header";

export default function User() {
  const image = require("../../assets/Profile.png");

  return (
    <View style={{ flex: 1 }}>
      {/* <Header heading="User profile" /> */}
      <SwipeSheet image={image} content={<UserDetailsData />} />
    </View>
  );
}

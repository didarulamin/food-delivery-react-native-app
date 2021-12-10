import React from "react";
import { View, Text } from "react-native";
import UserDetailsData from "../components/UserDetailsData/UserDetailsData";
import SwipeSheet from "../components/DragableSheet/SwipeSheet";
import Header from "../components/Header/Header";
import Button from "../components/Button";

export default function User() {
  const image = require("../../assets/Profile.png");

  return (
    <View style={{ flex: 1 }}>
      {/* <Header heading="User profile" /> */}
      <SwipeSheet image={image} content={<UserDetailsData />} />
      {/* <View style={{ position: "absolute", bottom: 100, width: "100%" }}>
        <Button
          title="Logout"
          titleColor={{ color: "white" }}
          customStyles={{ width: "80%", alignSelf: "center" }}
        />
      </View> */}
    </View>
  );
}

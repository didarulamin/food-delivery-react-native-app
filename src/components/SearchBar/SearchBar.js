import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import InputIcon from "../InputIcon";
import { typography } from "../../../theme";

export default function SearchBar() {
  return (
    <View>
      <Image
        style={styles.image}
        source={require("../../../assets/Pattern.png")}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View style={styles.headingContainer}>
          <Text style={styles.headings}>Find Your Favorite Food</Text>
        </View>
        <View style={styles.bell}>
          <Ionicons
            name="ios-notifications-outline"
            size={40}
            color="#fcc379"
            // style={{ margin: 5 }}
          />
        </View>
      </View>
      <View style={styles.searchContainer}>
        <InputIcon
          placeholder="What do you want to order?"
          iconName="md-search-sharp"
          customStyles={{ backgroundColor: "#fcf5eb" }}
        />
        <View
          style={{
            height: 55,
            width: 55,
            borderRadius: 10,
            backgroundColor: "#fcf5eb",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: 10,
          }}
        >
          <Octicons name="settings" size={24} color="black" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    position: "absolute",
    top: -100,
    right: -50,
    transform: [{ rotate: "45deg" }],
  },
  headings: {
    fontSize: 30,
    // fontWeight: "bold",
    marginTop: 60,
    fontFamily: typography.LargeBold,
  },
  headingContainer: {
    width: 233,
    marginLeft: 30,
  },
  bell: {
    height: 50,
    width: 50,
    borderRadius: 10,
    backgroundColor: "#fafdff",
    marginRight: 30,
    marginTop: 25,
    justifyContent: "center",
    alignItems: "center",
  },

  searchContainer: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    // alignItems: "center",
  },
});

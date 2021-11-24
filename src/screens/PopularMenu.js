import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  FlatList,
  ScrollView,
} from "react-native";
import SearchBar from "../components/SearchBar/SearchBar";
import FoodData from "../../DemoData/Food";
import { spacing, typography } from "../../theme";

export default function PopularMenu() {
  const popularMenuItem = ({ item }) => (
    <View
      key={item.id}
      style={{
        backgroundColor: "white",
        flexDirection: "row",
        height: 90,
        // width: 330,
        alignItems: "center",
        padding: 20,
        marginVertical: spacing[3],
        borderRadius: 15,
      }}
    >
      <Image source={item.image} />
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View style={{ marginLeft: 15 }}>
          <Text style={{ fontSize: 20, fontFamily: typography.MediumBold }}>
            {item.name}
          </Text>
          <Text
            style={{
              fontSize: 20,
              fontFamily: typography.Medium,
              color: "#CECDD2",
            }}
          >
            {item.restaurant}
          </Text>
        </View>

        <Text
          style={{
            fontSize: 24,
            fontFamily: typography.LargeBold,
            color: "#FFAD1D",
          }}
        >
          ${item.price}
        </Text>
      </View>
    </View>
  );

  return (
    <ScrollView contentContainerStyle={{ paddingBottom: 70 }}>
      <SearchBar />
      <SafeAreaView
        style={{
          flexDirection: "column",
          display: "flex",
          justifyContent: "space-around",
          padding: 20,
        }}
      >
        {FoodData.map((item) => popularMenuItem({ item }))}
        {/*    <FlatList
          data={FoodData}
          renderItem={popularMenuItem}
          keyExtractor={(item) => item.id}
        /> */}
      </SafeAreaView>
    </ScrollView>
  );
}

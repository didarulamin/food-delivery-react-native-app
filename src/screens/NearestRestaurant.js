import React from "react";
import { View, Text, SafeAreaView, Image, ScrollView } from "react-native";
import RestaurantData from "../../DemoData/Restaurant";
import { spacing, typography } from "../../theme";
import SearchBar from "../components/SearchBar/SearchBar";
import TabNavigation from "../components/TabNavigation/TabNavigation";

export default function NearestRestaurant() {
  const renderItem = ({ item }) => (
    <View
      key={item.id}
      style={{
        height: 184,
        width: 147,
        backgroundColor: "white",
        // justifyContent: "center",
        alignItems: "center",
        marginVertical: spacing[4],
        borderRadius: 15,
      }}
    >
      <Image
        style={{ height: 73, width: 96, marginTop: spacing[6] }}
        source={item.image}
      />
      <Text
        style={{
          color: "black",
          fontFamily: typography.MediumBold,
          marginVertical: spacing[4],
        }}
      >
        {item.name}
      </Text>
      <Text
        style={{
          color: "black",
          fontFamily: typography.Medium,
          marginTop: spacing[0],
          color: "#CECDD2",
        }}
      >
        {item.time}
      </Text>
    </View>
  );

  return (
    <View>
      <ScrollView>
        <SearchBar />
        <SafeAreaView
          style={{
            flexDirection: "row",
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
          }}
        >
          {RestaurantData.map((item) => renderItem({ item }))}
        </SafeAreaView>
      </ScrollView>
      <TabNavigation />
    </View>
  );
}

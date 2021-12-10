import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import SearchBar from "../components/SearchBar/SearchBar";
import { spacing, typography } from "../../theme";

export default function PopularMenu() {
  const route = useRoute();
  const navigation = useNavigation();
  const foodList = route.params.foodList;
  const popularMenuItem = ({ item }) => (
    <TouchableOpacity
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
      onPress={() => navigation.navigate("PopularMenuDetails", { item })}
    >
      <Image
        source={{ uri: item.image }}
        style={{ height: 70, width: 70, borderRadius: 10 }}
      />
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
    </TouchableOpacity>
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
        {foodList.map((item) => popularMenuItem({ item }))}
        {/*    <FlatList
          data={FoodData}
          renderItem={popularMenuItem}
          keyExtractor={(item) => item.id}
        /> */}
      </SafeAreaView>
    </ScrollView>
  );
}

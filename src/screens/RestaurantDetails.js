import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";
import Header from "../components/Header/Header";
export default function RestaurantDetails() {
  const route = useRoute();
  const { item } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <Header
        heading={item.name}
        // subheading=" This data will be displayed in your account profile for security"
      />
      <Text>{route.params.name}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

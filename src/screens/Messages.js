import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import Header from "../components/Header/Header";

export default function Messages() {
  return (
    <SafeAreaView style={styles.container}>
      <Header
        heading="Chat"
        // subheading=" This data will be displayed in your account profile for security"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

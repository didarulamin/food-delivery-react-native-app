import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import Button from "../components/Button";
import Input from "../components/Input";

export default function SignUpBio() {
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 26,
          fontWeight: "bold",
          textAlign: "left",
          width: "70%",
          marginVertical: 10,
        }}
      >
        Fill in your bio to get started
      </Text>
      <Text style={{ fontSize: 20, textAlign: "left", marginVertical: 10 }}>
        This data will be displayed in your account profile for security
      </Text>

      <Input placeholder="First Name" />
      <Input placeholder="Last Name" />
      <Input placeholder="Mobile Number" />

      <Button
        title="Next"
        titleColor={{ color: "white" }}
        customStyles={{ alignSelf: "center", marginVertical: 30 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
});

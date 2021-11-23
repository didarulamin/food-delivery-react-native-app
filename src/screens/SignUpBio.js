import React from "react";
import { View, Text, TextInput, StyleSheet, Image } from "react-native";
import Button from "../components/Button";
import Input from "../components/Input";
import Header from "../components/Header/Header";

export default function SignUpBio() {
  return (
    <View>
      <Image
        style={styles.image}
        source={require("../../assets/Pattern.png")}
      />
      <View style={styles.container}>
        <Header />
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: "center",
    padding: 20,
  },
  image: {
    position: "absolute",
    top: -150,
    right: -50,
    width: "100%",
    transform: [{ rotate: "45deg" }],
  },
});

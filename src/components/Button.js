import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const Button = ({ title, customStyles, onPress, titleColor }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        // Button Linear Gradient
        colors={["#53E88B", "#15BE77"]}
        style={[styles.buttons, customStyles]}
      >
        <Text style={[styles.title, titleColor]}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttons: {
    borderRadius: 50,
    // width: 165,
    height: 60,

    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },

  title: {
    fontSize: 16,
  },
});

export default Button;

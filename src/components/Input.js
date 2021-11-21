import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

const Input = ({ placeholder, onChangeText, secureTextEntry, value }) => {
  return (
    <View>
      <TextInput
        onChangeText={onChangeText}
        placeholder={placeholder}
        style={styles.input}
        secureTextEntry={secureTextEntry}
        value={value}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderBottomColor: "#ccc",
    padding: 15,
    marginBottom: 15,
    borderRadius: 15,
    backgroundColor: "white",
  },
});

export default Input;
